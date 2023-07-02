import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import RATING_FIELD from '@salesforce/schema/Account.Rating';
import SOURCE_FIELD from '@salesforce/schema/Account.AccountSource';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import WEBSITE_FIELD from '@salesforce/schema/Account.Website';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';

export default class AccountRecord extends LightningElement {
    fieldList = [NAME_FIELD, RATING_FIELD, SOURCE_FIELD, PHONE_FIELD, WEBSITE_FIELD, REVENUE_FIELD]

    successHandler(event) {
        console.log(event.detail.id);
        const toastEvent = new ShowToastEvent({
            title: "Account created",
            message: "Record ID: " + event.detal.id,
            variant:"success"
        });
        this.dispatchEvent(toastEvent);
    }
}