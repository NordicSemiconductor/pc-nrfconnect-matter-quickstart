/*
 * Copyright (c) 2023 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-4-Clause
 */

import Verify from '../../../common/steps/5xFamilyVerify';
import Apps from '../../../common/steps/Apps';
import Develop from '../../../common/steps/develop';
import Info from '../../../common/steps/Info';
import Learn from '../../../common/steps/Learn';
import Program from '../../../common/steps/program';
import Rename from '../../../common/steps/Rename';
import SelectEcosystem from '../../../common/steps/SelectEcosystem';
import EcosystemRequirements from '../../../common/steps/EcosystemRequirements';
import Pairing from '../../../common/steps/Pairing';
import Interaction from '../../../common/steps/Interaction';
import { Choice } from '../../device/deviceSlice';
import path from 'path';

const infoConfig = {
    title: 'Versatile single-board development kit',
    markdownContent:
        '![nRF52840 DK](52840DK.png)  \n&nbsp;  \nThe nRF52840 DK is a versatile single-board development kit for Bluetooth Low Energy, Bluetooth Mesh, Matter, Thread, Zigbee, 802.15.4, ANT and 2.4 GHz proprietary applications on the nRF52840 SoC. It is the recommended Nordic development kit for Amazon Sidewalk. It also supports development on the nRF52811 SoC.  \n&nbsp;  \n&nbsp;  \n![Technologies](52840DKTech.png)  \n&nbsp;  \nThe nRF52840 DK can be used for Matter over Thread where Thread is used for transport and Bluetooth LE for commissioning. Matter devices based on Thread are required to feature Bluetooth LE concurrently to enable adding new devices to a network.  \n&nbsp;  \n[Hardware documentation](https://docs.nordicsemi.com/bundle/ug_nrf52840_dk/page/UG/dk/intro.html)',
};

const programConfig = [
    {
        name: 'Matter Door Lock',
        type: 'jlink',
        description: 'This door lock sample demonstrates the usage of the Matter application layer to build a door lock device with one basic bolt. You can use this sample as a reference for creating your application. This device works as a Matter accessory device, meaning it can be paired and controlled remotely over a Matter network built on top of a low-power 802.15.4 Thread network.',
        documentation: {
            label: 'Matter Door Lock',
            href: 'https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/samples/matter/lock/README.html',
        },
        firmware: [
            {
                core: 'Application',
                file: 'nrf52840dk_lock.hex',
                link: {
                    label: 'Matter Door Lock',
                    href: 'https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/samples/matter/lock/README.html',
                },
            },
        ],
    },
    {
        name: 'Matter Light Bulb',
        type: 'jlink',
        description: 'This light bulb sample demonstrates the usage of the Matter application layer to build a white dimmable light bulb device. You can use this sample as a reference for creating your application. This device works as a Matter accessory device, meaning it can be paired and controlled remotely over a Matter network built on top of a low-power 802.15.4 Thread network.',
        documentation: {
            label: 'Matter Light Bulb',
            href: 'https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/samples/matter/light_bulb/README.html',
        },
        firmware: [
            {
                core: 'Application',
                file: 'nrf52840dk_light_bulb.hex',
                link: {
                    label: 'Matter Light Bulb',
                    href: 'https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/samples/matter/light_bulb/README.html',
                },
            },
        ],
    },
] as Choice[];

const verifyConfig = [
    {
        ref: 'Matter Door Lock',
        config: {
            vComIndex: 0,
            regex: /(Using nRF Connect SDK[\s\S]*Init CHIP stack[\s\S]*Device Configuration:[\s\S]*Setup Discriminator \(0xFFFF for UNKNOWN\/ERROR\): 3840 \(0xF00\))/,
        },
    },
    {
        ref: 'Matter Light Bulb',
        config: {
            vComIndex: 0,
            regex: /(Using nRF Connect SDK[\s\S]*Init CHIP stack[\s\S]*Device Configuration:[\s\S]*Setup Discriminator \(0xFFFF for UNKNOWN\/ERROR\): 3840 \(0xF00\))/,
        },
    },
];

const ecosystemsConfig = [
    {
        name: 'Apple Home',
        description: 'Work with Apple Home',
        link: 'https://www.apple.com/home-app/'
    },
    {
        name: 'Google Home',
        description: 'Work with Google Home',
        link: 'https://home.google.com/welcome/'
    },
    {
        name: 'Amazon Alexa',
        description: 'Work with Amazon Alexa',
        link: 'https://www.amazon.com/Alexa-App/b?ie=UTF8&node=18354642011'
    },
    {
        name: 'SmartThings',
        description: 'Work with SmartThings',
        link: 'https://www.samsung.com/uk/smartthings/app/'
    },
];

const lockFactoryDataImagePath = path.resolve(__dirname, '../../../resources/devices/images/lock_factory_data.png');
const lightBulbFactoryDataImagePath = path.resolve(__dirname, '../../../resources/devices/images/light_bulb_factory_data.png');

const pairingConfig = [
    {
        name: 'Matter Door Lock',
        qrCodePng: lockFactoryDataImagePath,
    },
    {
        name: 'Matter Light Bulb',
        qrCodePng: lightBulbFactoryDataImagePath,
    },
];

const interactConfig = [
    {
        name: "Matter Door Lock",
        instruction: "Click the Matter Door Lock icon to change the device state and watch the LED2 on the board that corresponds to the lock state."
        
    },
    {
        name: "Matter Light Bulb",
        instruction: "Click the Matter Light Bulb icon to change the device state and watch the LED2 on the board that corresponds to the light bulb state."
    }
];  

const learnConfig = [
    {
        label: 'Developer Academy',
        description:
            'Get the know-how to build wireless products using Nordic Semiconductor solutions.',
        link: {
            label: 'Nordic Developer Academy',
            href: 'https://academy.nordicsemi.com/',
        },
    },
    {
        label: 'nRF Connect SDK and Zephyr',
        description:
            'Learn about the application development in the nRF Connect SDK and Zephyr.',
        link: {
            label: 'Application development',
            href: 'https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/app_dev.html',
        },
    },
    {
        label: 'Developing with nRF52 Series',
        description:
            'Device-specific information about features, DFU solution, and development.',
        link: {
            label: 'Developing with nRF52 Series',
            href: 'https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/app_dev/device_guides/nrf52/index.html',
        },
    },
];

const developConfig = [
    {
        ref: 'Matter Door Lock',
        sampleSource: 'nrf/samples/matter/lock',
    },
    {
        ref: 'Matter Light Bulb',
        sampleSource: 'nrf/samples/matter/light_bulb',
    },
];

const appsConfig = [
    'pc-nrfconnect-programmer',
    'pc-nrfconnect-serial-terminal',
    'pc-nrfconnect-dtm',
];

export default {
    device: 'nRF52840 DK',
    flow: [
        Info(infoConfig),
        Rename(),
        Program(programConfig),
        Verify(verifyConfig),
        SelectEcosystem(ecosystemsConfig),
        EcosystemRequirements(),
        Pairing(),
        Interaction(interactConfig),
        Learn(learnConfig),
        Develop(developConfig),
        Apps(appsConfig),
    ],
};
