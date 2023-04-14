import { Injectable } from '@angular/core';
import { ValidatorFn, FormGroup, ValidationErrors, FormGroupDirective } from '@angular/forms';

/**
 * @author ToiTV
 * 2021-11-30
 */

@Injectable({
    providedIn: 'root'
})
export class ValidationService {

    /**
       * Check Only
       * @param str
       * @param characters
       */
    static isOnly(str: string, characters: { toString(): string }): boolean {
        const chars = characters
            .toString()
            .replace(/\\/g, '\\\\')
            .replace(/\(/g, '\\(')
            .replace(/\)/g, '\\)')
            .replace(/\[/g, '\\[')
            .replace(/\]/g, '\\]');
        return new RegExp('^[' + chars + ']+$', 'gm').test(str);
    }

    /**
     * Check null and ""
     * @param obj
     */
    static isBlank(obj: any): boolean {
        return obj === undefined || obj === null || (typeof obj === "string" && obj == "");
    }

    static isNotBlank(obj: any): boolean {
        return !this.isBlank(obj);
    }

    /**
     * Check String type
     * @param obj
     */
    static isString(obj: any): boolean {
        return typeof obj === "string";
    }



    static checkEmailValidator(email: String): boolean {
        if (email == null) {
            return false;
        }
        if (this.isDoubleByte(email.toString())) {
            return false;
        }
        var regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return regex.test(email.toString());
    }

   
    /**
    * Method to check double byte
    * @param str
    */
    static isDoubleByte(str: string): boolean {
        return /[^\u0000-\u00ff]/.test(str);
    }
    /**
    * Method to check Range of Value Integer
    * @param numberCheck
    */
    static checkRangeInteger(numberCheck: number): boolean {
        let minRange: number = -2147483648;
        let maxRange: number = 2147483647;
        if (numberCheck >= minRange && numberCheck <= maxRange) {
            return true;
        }
        else {
            return false;
        }
    }

    /**
    * Method to check Range of Value Money
    * @param numberCheck
    */
    static checkRangeMoney(numberCheck: number): boolean {
        let minRange: number = 0;
        let maxRange: number = 2147483647;
        if (numberCheck >= minRange && numberCheck <= maxRange) {
            return true;
        }
        else {
            return false;
        }
    }

    /**
    * Method to check valid number
    * @param str  Input value
    * @return result: true if input value is number, else return false; msg: message error
    */
    static isValidNumber(str: any): { result: boolean } {
        if (str == null || str.toString().trim() == "") {
            return { result: false };
        }

        if (this.isDoubleByte(str)) {
            return { result: false };
        }

        var keyPattern = /^[0-9\-]*$/;
        if (!keyPattern.test(str)) {
            return { result: false };
        }

        return { result: true };
    }

    /**
    * Method to check phone number
    * @param str 
    * @return result: true if input value is phonex format, else return false; msg: message error
    */
    static isPhone(str: any): { result: boolean } {
        // Validate number
        var result = this.isValidNumber(str);

        // Validate phone format
        if (result.result) {
            var keyPattern = /^\d{10}$/;
            return { result: keyPattern.test(str) };
        }
        return result;
    }

    /**
    * Method to check digit is number
    * @param digit
    */
    static isNumberDigit(digit: string): boolean {
        var keyPattern = /^[0-9]$/;
        return keyPattern.test(digit);
    }
    /**
     * Method to check is number
     * @param value
     */
    static isNumber(value: string): boolean {
        var keyPattern = /^[0-9]*$/;
        return keyPattern.test(value);
    }

    /**
     * Method to check is CMND number
     * @param value
     */
    static isCMNDNumber(value: string): boolean {
        return (this.isNumber(value) && (value.length == 9 || value.length == 12));
    }

    /**
     * Method to check is CMND number
     * @param value
     */
    static resetForm(form: FormGroup, formDirective?: FormGroupDirective): void {
        if (formDirective) formDirective.resetForm();
        form.reset();
    }

    /**
     * Auto scroll to the first error message
     */

}
