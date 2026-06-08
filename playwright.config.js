// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'node:console';


/**
 * @see https://playwright.dev/docs/test-configuration
 */

const config = ({
    testDir: './tests',
    timeout: 40 * 1000,
    expect: {

        timeout: 40 * 1000
    },
    use: {
        browserName: 'chromium',
        headless : false,
       
    },
    reporter: 'html',

});

module.exports = config;


