/*
 * Copyright (c) 2023 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-4-Clause
 */

import React from 'react';

import NRF54L15 from './nRF54L15';
import NRF54LM20 from './nRF54LM20';
import NRF5340 from './nRF5340';
import NRF52840 from './nRF52840';
import { getSelectedPairingConfig, pairingConfig } from './pairingConfig';
import THINGY53 from './thingy53';

export interface Flow {
    name: string;
    component: React.FC;
}

export { pairingConfig, getSelectedPairingConfig };

export default {
    [NRF52840.device]: NRF52840.flow,
    [NRF5340.device]: NRF5340.flow,
    [NRF54L15.device]: NRF54L15.flow,
    [NRF54LM20.device]: NRF54LM20.flow,
    [THINGY53.device]: THINGY53.flow,
} as Record<string, Flow[]>;
