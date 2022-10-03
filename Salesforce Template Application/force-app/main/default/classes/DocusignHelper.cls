/**
 * @description       : 
 * @author            : Salesforce Consultancy
 * @group             : 
 * @last modified on  : 10-01-2022
 * @last modified by  : Salesforce Consultancy
**/
public with sharing class DocusignHelper {

    private static final String DOCUSIGN_CREDENTIAL_NAME = CredentialsSettingUtility.DOCUSIGN_APP ;

    public CredentialsSetting__c getDocusignCredential(){
        return CredentialsSettingUtility.getCredential(DOCUSIGN_CREDENTIAL_NAME);
    }

    
}