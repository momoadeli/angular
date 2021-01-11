import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let NotificationService = class NotificationService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    showSuccess(message) {
        this.snackBar.open(message, null, { duration: 2500, panelClass: ['snackbar-no-error'] });
    }
    showError(message) {
        // The second parameter is the text in the button.
        // In the third, we send in the css class for the snack bar.
        this.snackBar.open(message, null, { duration: 2500, panelClass: ['snackbar-error'] });
    }
};
NotificationService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], NotificationService);
export { NotificationService };
//# sourceMappingURL=notification.service.js.map