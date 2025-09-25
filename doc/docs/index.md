# {{app_name}}

The {{app_name}} is a cross-platform tool for guided setup and installation procedures of Matter accessory devices by Nordic Semiconductor, available as one of the applications in [nRF Connect for Desktop](https://docs.nordicsemi.com/bundle/nrf-connect-desktop/page/index.html).

## Overview

[Matter](https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/protocols/matter/index.html) is an open-source connectivity standard for smart home and IoT devices. Developed by the Connectivity Standards Alliance (CSA), Matter aims to enable secure, reliable, and seamless communication between a wide range of devices from different manufacturers. It is designed to work over common networking technologies such as Ethernet, Wi-Fi, and Thread, and supports integration with major smart home ecosystems.

To work with the Matter protocol, accessory devices such as sensors, lights, or door locks must be paired with a Matter controller device, which is usually a smart hub or mobile device. Setting up the ecosystem and pairing accessory devices is a required step in the process, and it is often a point where users encounter difficulties.

The {{app_name}} application is designed to guide you through these steps and make the Matter accessories setup smooth and fast. Additionally, the application allows you to program your device with pre-compiled binaries for several [Matter sample](https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/samples/matter.html) applications, enabling very fast evaluation and hands-on experience without the need to build firmware by yourself.

The application supports the following features:

- Programming your device with several pre-compiled Matter sample applications for quick evaluation.
- Verifying the device output to ensure correct operation after programming.
- Step-by-step instructions for setting up one of the four major smart home ecosystems: Apple Home, Google Home, Amazon Alexa, and Samsung SmartThings to work with Matter.
- Guidance on pairing your Matter accessory device and controlling it within your chosen ecosystem.

## Installation

You can run the {{app_name}} when you [download and install nRF Connect for Desktop](https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-Desktop/Download).
You will be prompted to try out the {{app_name}} when you open the launcher.

After installing and opening the app from nRF Connect for Desktop, connect your device to your machine using an USB cable and follow the steps in the application.

## Supported devices

- nRF54L15 DK
- nRF54LM20 DK
- nRF5340 DK
- nRF52840 DK
- Nordic Thingy:53

## Application source code

The code of the application is open source and [available on GitHub](https://github.com/NordicSemiconductor/pc-nrfconnect-matter-quickstart).
Feel free to fork the repository and clone it for secondary development or feature contributions.
