/*
 * dkPlus API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.43
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DkPlusApi);
  }
}(this, function(expect, DkPlusApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('DkCloudDataModelCustomersCustomerModel', function() {
      beforeEach(function() {
        instance = new DkPlusApi.DkCloudDataModelCustomersCustomerModel();
      });

      it('should create an instance of DkCloudDataModelCustomersCustomerModel', function() {
        // TODO: update the code to test DkCloudDataModelCustomersCustomerModel
        expect(instance).to.be.a(DkPlusApi.DkCloudDataModelCustomersCustomerModel);
      });

      it('should have the property deleted (base name: "Deleted")', function() {
        // TODO: update the code to test the property deleted
        expect(instance).to.have.property('deleted');
        // expect(instance.deleted).to.be(expectedValueLiteral);
      });

      it('should have the property contacts (base name: "Contacts")', function() {
        // TODO: update the code to test the property contacts
        expect(instance).to.have.property('contacts');
        // expect(instance.contacts).to.be(expectedValueLiteral);
      });

      it('should have the property recivers (base name: "Recivers")', function() {
        // TODO: update the code to test the property recivers
        expect(instance).to.have.property('recivers');
        // expect(instance.recivers).to.be(expectedValueLiteral);
      });

      it('should have the property memos (base name: "Memos")', function() {
        // TODO: update the code to test the property memos
        expect(instance).to.have.property('memos');
        // expect(instance.memos).to.be(expectedValueLiteral);
      });

      it('should have the property properties (base name: "Properties")', function() {
        // TODO: update the code to test the property properties
        expect(instance).to.have.property('properties');
        // expect(instance.properties).to.be(expectedValueLiteral);
      });

      it('should have the property changes (base name: "Changes")', function() {
        // TODO: update the code to test the property changes
        expect(instance).to.have.property('changes');
        // expect(instance.changes).to.be(expectedValueLiteral);
      });

      it('should have the property attachments (base name: "Attachments")', function() {
        // TODO: update the code to test the property attachments
        expect(instance).to.have.property('attachments');
        // expect(instance.attachments).to.be(expectedValueLiteral);
      });

      it('should have the property conditions (base name: "Conditions")', function() {
        // TODO: update the code to test the property conditions
        expect(instance).to.have.property('conditions');
        // expect(instance.conditions).to.be(expectedValueLiteral);
      });

      it('should have the property sendTo (base name: "SendTo")', function() {
        // TODO: update the code to test the property sendTo
        expect(instance).to.have.property('sendTo');
        // expect(instance.sendTo).to.be(expectedValueLiteral);
      });

      it('should have the property recordID (base name: "RecordID")', function() {
        // TODO: update the code to test the property recordID
        expect(instance).to.have.property('recordID');
        // expect(instance.recordID).to.be(expectedValueLiteral);
      });

      it('should have the property _number (base name: "Number")', function() {
        // TODO: update the code to test the property _number
        expect(instance).to.have.property('_number');
        // expect(instance._number).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "Name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property alias (base name: "Alias")', function() {
        // TODO: update the code to test the property alias
        expect(instance).to.have.property('alias');
        // expect(instance.alias).to.be(expectedValueLiteral);
      });

      it('should have the property address1 (base name: "Address1")', function() {
        // TODO: update the code to test the property address1
        expect(instance).to.have.property('address1');
        // expect(instance.address1).to.be(expectedValueLiteral);
      });

      it('should have the property address2 (base name: "Address2")', function() {
        // TODO: update the code to test the property address2
        expect(instance).to.have.property('address2');
        // expect(instance.address2).to.be(expectedValueLiteral);
      });

      it('should have the property address3 (base name: "Address3")', function() {
        // TODO: update the code to test the property address3
        expect(instance).to.have.property('address3');
        // expect(instance.address3).to.be(expectedValueLiteral);
      });

      it('should have the property zipCode (base name: "ZipCode")', function() {
        // TODO: update the code to test the property zipCode
        expect(instance).to.have.property('zipCode');
        // expect(instance.zipCode).to.be(expectedValueLiteral);
      });

      it('should have the property balanceAmount (base name: "BalanceAmount")', function() {
        // TODO: update the code to test the property balanceAmount
        expect(instance).to.have.property('balanceAmount');
        // expect(instance.balanceAmount).to.be(expectedValueLiteral);
      });

      it('should have the property phone (base name: "Phone")', function() {
        // TODO: update the code to test the property phone
        expect(instance).to.have.property('phone');
        // expect(instance.phone).to.be(expectedValueLiteral);
      });

      it('should have the property phoneLocal (base name: "PhoneLocal")', function() {
        // TODO: update the code to test the property phoneLocal
        expect(instance).to.have.property('phoneLocal');
        // expect(instance.phoneLocal).to.be(expectedValueLiteral);
      });

      it('should have the property phoneMobile (base name: "PhoneMobile")', function() {
        // TODO: update the code to test the property phoneMobile
        expect(instance).to.have.property('phoneMobile');
        // expect(instance.phoneMobile).to.be(expectedValueLiteral);
      });

      it('should have the property phoneFax (base name: "PhoneFax")', function() {
        // TODO: update the code to test the property phoneFax
        expect(instance).to.have.property('phoneFax');
        // expect(instance.phoneFax).to.be(expectedValueLiteral);
      });

      it('should have the property countryCode (base name: "CountryCode")', function() {
        // TODO: update the code to test the property countryCode
        expect(instance).to.have.property('countryCode');
        // expect(instance.countryCode).to.be(expectedValueLiteral);
      });

      it('should have the property originCountryCode (base name: "OriginCountryCode")', function() {
        // TODO: update the code to test the property originCountryCode
        expect(instance).to.have.property('originCountryCode');
        // expect(instance.originCountryCode).to.be(expectedValueLiteral);
      });

      it('should have the property email (base name: "Email")', function() {
        // TODO: update the code to test the property email
        expect(instance).to.have.property('email');
        // expect(instance.email).to.be(expectedValueLiteral);
      });

      it('should have the property password (base name: "Password")', function() {
        // TODO: update the code to test the property password
        expect(instance).to.have.property('password');
        // expect(instance.password).to.be(expectedValueLiteral);
      });

      it('should have the property group (base name: "Group")', function() {
        // TODO: update the code to test the property group
        expect(instance).to.have.property('group');
        // expect(instance.group).to.be(expectedValueLiteral);
      });

      it('should have the property salesPerson (base name: "SalesPerson")', function() {
        // TODO: update the code to test the property salesPerson
        expect(instance).to.have.property('salesPerson');
        // expect(instance.salesPerson).to.be(expectedValueLiteral);
      });

      it('should have the property discount (base name: "Discount")', function() {
        // TODO: update the code to test the property discount
        expect(instance).to.have.property('discount');
        // expect(instance.discount).to.be(expectedValueLiteral);
      });

      it('should have the property useItemRecivers (base name: "UseItemRecivers")', function() {
        // TODO: update the code to test the property useItemRecivers
        expect(instance).to.have.property('useItemRecivers');
        // expect(instance.useItemRecivers).to.be(expectedValueLiteral);
      });

      it('should have the property paymentTerm (base name: "PaymentTerm")', function() {
        // TODO: update the code to test the property paymentTerm
        expect(instance).to.have.property('paymentTerm');
        // expect(instance.paymentTerm).to.be(expectedValueLiteral);
      });

      it('should have the property paymentMode (base name: "PaymentMode")', function() {
        // TODO: update the code to test the property paymentMode
        expect(instance).to.have.property('paymentMode');
        // expect(instance.paymentMode).to.be(expectedValueLiteral);
      });

      it('should have the property currencyCode (base name: "CurrencyCode")', function() {
        // TODO: update the code to test the property currencyCode
        expect(instance).to.have.property('currencyCode');
        // expect(instance.currencyCode).to.be(expectedValueLiteral);
      });

      it('should have the property noVat (base name: "NoVat")', function() {
        // TODO: update the code to test the property noVat
        expect(instance).to.have.property('noVat');
        // expect(instance.noVat).to.be(expectedValueLiteral);
      });

      it('should have the property ledgerCode (base name: "LedgerCode")', function() {
        // TODO: update the code to test the property ledgerCode
        expect(instance).to.have.property('ledgerCode');
        // expect(instance.ledgerCode).to.be(expectedValueLiteral);
      });

      it('should have the property blocked (base name: "Blocked")', function() {
        // TODO: update the code to test the property blocked
        expect(instance).to.have.property('blocked');
        // expect(instance.blocked).to.be(expectedValueLiteral);
      });

      it('should have the property gender (base name: "Gender")', function() {
        // TODO: update the code to test the property gender
        expect(instance).to.have.property('gender');
        // expect(instance.gender).to.be(expectedValueLiteral);
      });

      it('should have the property priceGroup (base name: "PriceGroup")', function() {
        // TODO: update the code to test the property priceGroup
        expect(instance).to.have.property('priceGroup');
        // expect(instance.priceGroup).to.be(expectedValueLiteral);
      });

      it('should have the property billingFee (base name: "BillingFee")', function() {
        // TODO: update the code to test the property billingFee
        expect(instance).to.have.property('billingFee');
        // expect(instance.billingFee).to.be(expectedValueLiteral);
      });

      it('should have the property modified (base name: "Modified")', function() {
        // TODO: update the code to test the property modified
        expect(instance).to.have.property('modified');
        // expect(instance.modified).to.be(expectedValueLiteral);
      });

    });
  });

}));