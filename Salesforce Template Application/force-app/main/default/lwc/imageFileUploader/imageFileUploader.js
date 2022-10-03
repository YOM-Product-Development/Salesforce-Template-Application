/**
 * @description       : 
 * @author            : Salesforce Consultancy
 * @group             : 
 * @last modified on  : 10-02-2022
 * @last modified by  : Salesforce Consultancy
**/
import { api, LightningElement, track } from 'lwc';

import getFiles from '@salesforce/apex/RecordFiles.getFiles';

const IMAGE_BASEURL = "/sfc/servlet.shepherd/version/download/";

export default class ImageFileUploader extends LightningElement {
    /** Record ID  */
    @api recordId;
    /** Configurable title  */
    @api title;

    /** Component Modes  */
    @track isFilter;
    @track isUpload;
    @track selectedDocument   ;
    @track editDocument ;
    /** Image/Files Data  */
    @track images = [ ]; 

    /**    
     * 
     */
    connectedCallback(){
        this.loadFiles();
        
    }
    onRefresh(event) {
        this.loadFiles();
    }
    /**
     * 
     * 
     * 
     */
    loadFiles(){
        getFiles({recordId : this.recordId})
        .then((result) => {
            this.images = result;
            this.processImages();
            this.error = undefined;
        })
        .catch((error) => {
            this.error = error;
            this.images = undefined;
        });
    }
    onApplyFilter(event){
         this.isFilter = !this.isFilter;
    }
    onUploadMode(event){
        this.isUpload = !this.isUpload;
   }
    /**
     * 
     */
    processImages(){
        //iterate over all Images
        this.images.forEach(image => {
            image.imageURL = IMAGE_BASEURL+image.Id;
            image.isImage = this.isImage(image.FileType);
            //populate Keywords and Tags 
            if( image.keywordsAndTags ){
                let keywords = [];
                let keywordsAnsTags = image.keywordsAndTags.split(",") ;
                    if( keywordsAnsTags) {
                        keywordsAnsTags.forEach(element => {
                            let newKeyword = {id:1 , label:element };
                            keywords.push(newKeyword);
                        });
                    }
                image.keywords = keywords;
            }
        });
    }
    /**
     * 
     * @param {*} event 
     */
    handleFilteronImageType(event ){

    }
    onMounseOnImage(event ){
        let index = event.target.dataset.index;
        console.log("Index Found :"+index);
        if( index ){
            this.images[parseInt(index)].isSelected = true ;
        }
    }
    onMounseLeaveImage(event ){
        let index = event.target.dataset.index;
        console.log("Index Found :"+index);
        if( index ){
            this.images[parseInt(index)].isSelected = false ;
        }
    }
    onMounseClickOnImage(event ){
        let index = event.target.dataset.index;
        console.log("Index Found :"+index);
        if( index ){
            this.images[parseInt(index)].isSelected = true ;
            this.selectedDocument = this.images[parseInt(index)];
            this.editDocument = true;
        }
    }

    hideModalBox(event ){
        this.editDocument = false;
    }
    /**
     * 
     */
    get imagesSupported() {
        return [
            { label: 'JEPG', value: 'JPEG' },
            { label: 'JPG', value: 'JPG' },
            { label: 'JFIF', value: 'JFIF' },
            { label: 'PIPEG', value: 'PIPEG' },
            { label: 'PNG', value: 'PNG' },
            { label: 'TIFF', value: 'TIFF' },
            { label: 'BMP', value: 'BMP' },
            { label: 'XBMP', value: 'XBMP' },
            { label: 'SVG', value: 'SVG' },
            { label: 'GIF', value: 'GIF' },
            { label: 'WebP', value: 'webp' },
        ];
    }

    isImage(fileType ){
        let returnValue = false;
        let supportedImageList = this.imagesSupported;
        supportedImageList.forEach(element => {
            if (fileType == element.value ){
                returnValue = true;
            }
        });
        return returnValue;
    }
}  