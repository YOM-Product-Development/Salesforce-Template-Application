/**
 * @description       : 
 * @author            : Salesforce Consultancy
 * @group             : 
 * @last modified on  : 09-26-2022
 * @last modified by  : Salesforce Consultancy
**/
@isTest public with sharing class CredentialsSettingUtilityTest {


    @isTest
    private static void testTestCase() {
        // Test data setup
        createCredentialSettings();
        // Actual test
        Test.startTest();
            CredentialsSetting__c setting = CredentialsSettingUtility.getCredential('NAME-01');
            System.assert(setting != null , 'Settings found = '+setting ) ;
        Test.stopTest();
    
        // Asserts
    }

    private static void createCredentialSettings(){
        List<CredentialsSetting__c> settings = new List<CredentialsSetting__c>();
        for( Integer iCount =0 ; iCount <= 10 ; iCount++) {
            CredentialsSetting__c credSetting = new CredentialsSetting__c( name =  'NAME-0'+iCount ,  name__c = 'NAME-0'+iCount ,isActive__C=true);
            settings.add(credSetting);
        }
        
        insert settings;
    }

}
