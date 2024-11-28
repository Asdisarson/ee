<?php
/**
 * Plugin Name: DK Plus Sync
 * Plugin URI: https://dkplus.is
 * Description: Synchronizes WooCommerce with DK Plus API
 * Version: 1.0.0
 * Author: DK Plus
 * Text Domain: dk-plus-sync
 */

defined('ABSPATH') || exit;

class DK_Plus_Sync {
        const API_ENDPOINT = 'http://localhost:3000/api';
    const DK_PLUS_API_KEY = '9fd1c68e-64bc-4930-921e-5dd45d1344f6';
    const API_SERVICE_KEY = '1234567890';

    public function __construct() {
        add_action('plugins_loaded', array($this, 'init'));
        register_activation_hook(__FILE__, array($this, 'activate'));
        register_deactivation_hook(__FILE__, array($this, 'deactivate'));
    }

    public function init() {
        if (!class_exists('WooCommerce')) {
            add_action('admin_notices', array($this, 'woocommerce_missing_notice'));
            return;
        }
    }

    public function activate() {
        if (!class_exists('WooCommerce')) {
            deactivate_plugins(plugin_basename(__FILE__));
            wp_die('This plugin requires WooCommerce to be installed and activated.');
        }

        $this->setup_integration();
    }

    private function setup_integration() {
        global $wpdb;rad2deg

        try {
            // Generate WooCommerce API keys
            $description = 'DK Plus Sync';
            $user = wp_get_current_user();
            $permissions = 'read_write';

            $consumer_key = 'ck_' . wc_rand_hash();
            $consumer_secret = 'cs_' . wc_rand_hash();

            // Insert WooCommerce API keys
            $data = array(
                'user_id' => $user->ID,
                'description' => $description,
                'permissions' => $permissions,
                'consumer_key' => wc_api_hash($consumer_key),
                'consumer_secret' => $consumer_secret,
                'truncated_key' => substr($consumer_key, -7)
            );

            $wpdb->insert(
                $wpdb->prefix . 'woocommerce_api_keys',
                $data,
                array('%d', '%s', '%s', '%s', '%s', '%s')
            );

            if ($wpdb->last_error) {
                throw new Exception('Failed to create WooCommerce API keys: ' . $wpdb->last_error);
            }

            // Register with API service
            $response = wp_remote_post(self::API_ENDPOINT . '/register', array(
                'timeout' => 30,
                'body' => wp_json_encode(array(
                    'woocommerce_ck' => $consumer_key,
                    'woocommerce_cs' => $consumer_secret,
                    'dkplus_api_key' => self::DK_PLUS_API_KEY,
                    'website_url' => get_site_url()
                )),
                'headers' => array(
                    'Content-Type' => 'application/json',
                    'X-API-Key' => self::API_SERVICE_KEY
                )
            ));

            if (is_wp_error($response)) {
                throw new Exception('Failed to register with API service: ' . $response->get_error_message());
            }

            $body = json_decode(wp_remote_retrieve_body($response), true);
            
            if (!isset($body['apiKey'])) {
                throw new Exception('Invalid response from API service');
            }

        } catch (Exception $e) {
            error_log('DK Plus Sync: ' . $e->getMessage());
            // Optionally deactivate the plugin on setup failure
            deactivate_plugins(plugin_basename(__FILE__));
            wp_die('DK Plus Sync setup failed: ' . esc_html($e->getMessage()));
        }
    }

    public function deactivate() {
        // Cleanup if needed
    }

    public function woocommerce_missing_notice() {
        ?>
        <div class="error">
            <p><?php _e('DK Plus Sync requires WooCommerce to be installed and active.', 'dk-plus-sync'); ?></p>
        </div>
        <?php
    }
}

new DK_Plus_Sync();