import { Page, Locator, expect } from '@playwright/test';

export class RoomPage {
    readonly page: Page;
    reserveRoom: Locator;
    firstN: Locator;
    lastN: Locator;
    email: Locator;
    phone: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.reserveRoom = page.getByRole('button', { name: 'Reserve Now' });
        this.firstN = page.getByRole('textbox', { name: 'Firstname' });
        this.lastN = page.getByRole('textbox', { name: 'Lastname' });
        this.email = page.getByRole('textbox', { name: 'Email' });
        this.phone = page.getByRole('textbox', { name: 'Phone' });
    }

    
}
