/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import { Picker } from '../src/Picker.js';
import {
    Overlay,
    OverlayOptions,
    TriggerInteractions,
} from '@spectrum-web-components/overlay';

Picker.openOverlay = async (
    target: HTMLElement,
    interaction: TriggerInteractions,
    content: HTMLElement,
    options: OverlayOptions
): Promise<() => void> => {
    return await Overlay.open(target, interaction, content, options);
};
