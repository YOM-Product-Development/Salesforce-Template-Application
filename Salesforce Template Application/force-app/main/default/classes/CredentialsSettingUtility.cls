/**
 * @description       : 
 * @author            : Salesforce Consultancy
 * @group             : 
 * @last modified on  : 09-26-2022
 * @last modified by  : Salesforce Consultancy
**/
public with sharing class CredentialsSettingUtility {

    public static final String DOCUSIGN_APP = 'Docusign';

    /**
     * 
     */
    public static CredentialsSetting__c getCredential(String name ){
        CredentialsSetting__c settings = null;
        Map<String,CredentialsSetting__c> credentialSetting = CredentialsSetting__c.getAll(); 
        for(CredentialsSetting__c credentialIns : credentialSetting.values()){ 
            logMessage('Object :- '+credentialIns);
            if (credentialIns.isActive__C && credentialIns.name__c == name ){
                settings =  credentialIns;
            }
        }
        return settings ;
    }

    /**
     * 
     */
    public static void logMessage(String message){
        System.debug('[CredentialsSettingUtility] : ' + message);
    }
}
