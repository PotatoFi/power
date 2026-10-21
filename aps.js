//   antennaType: "internal" (locked), "detachable" (default but editable), "external" (user-entered)
//   gain: dBi (default; for "external" use 0 since the antenna is unknown)
//   chains: spatial streams
//   maxEirp: optional maximum transmit power
const aps = {
    generic: {
        name: "Generic",
        models: [
            {
                model: "2x2 AP",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "detachable",
                        gain: 4,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "detachable",
                        gain: 4,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "6 GHz",
                        band: "6",
                        antennaType: "detachable",
                        gain: 4,
                        chains: 2,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "3x3 AP",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "detachable",
                        gain: 4,
                        chains: 3,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "detachable",
                        gain: 4,
                        chains: 3,
                        maxEirp: null,
                    },
                    {
                        name: "6 GHz",
                        band: "6",
                        antennaType: "detachable",
                        gain: 4,
                        chains: 3,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "4x4 AP",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "detachable",
                        gain: 4,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "detachable",
                        gain: 4,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "6 GHz",
                        band: "6",
                        antennaType: "detachable",
                        gain: 4,
                        chains: 4,
                        maxEirp: null,
                    },
                ],
            },
        ],
    },
    alcatel: {
        name: "Alcatel-Lucent Enterprise",
        models: [
            {
                model: "AP1311",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 3.3,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 3.3,
                        chains: 2,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "AP1361",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "external",
                        gain: 0,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "external",
                        gain: 0,
                        chains: 4,
                        maxEirp: null,
                    },
                ],
            },
        ],
    },
    arista: {
        name: "Arista",
        models: [
            {
                model: "C-260",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 4.92,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 6.1,
                        chains: 8,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "C-330",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 4.8,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 5.3,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "6 GHz",
                        band: "6",
                        antennaType: "internal",
                        gain: 6,
                        chains: 2,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "C-360",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 4.2,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 6.3,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "6 GHz",
                        band: "6",
                        antennaType: "internal",
                        gain: 6.3,
                        chains: 4,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "C-400",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 4,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 5,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "6 GHz",
                        band: "6",
                        antennaType: "internal",
                        gain: 5,
                        chains: 2,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "C-430",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 4,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 5,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "6 GHz",
                        band: "6",
                        antennaType: "internal",
                        gain: 5,
                        chains: 2,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "C-460",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 2.8,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 5.25,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "6 GHz",
                        band: "6",
                        antennaType: "internal",
                        gain: 5.75,
                        chains: 4,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "O-405",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 5,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 4,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "6 GHz",
                        band: "6",
                        antennaType: "internal",
                        gain: 5,
                        chains: 2,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "W-318",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 4.44,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 5.86,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "6 GHz",
                        band: "6",
                        antennaType: "internal",
                        gain: 5.2,
                        chains: 2,
                        maxEirp: null,
                    },
                ],
            },
        ],
    },
    aruba: {
        name: "HPE Aruba", // Datasheets refer to "MIMO with peak gain" and "peak gain for the combined, average pattern". This uses the latter on the basis that it excludes MIMO gain.
        models: [
            {
                model: "AP-503",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 1.5,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 3.9,
                        chains: 2,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "AP-503H",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 1.7,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 5,
                        chains: 2,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "AP-505",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 4.3,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 5.6,
                        chains: 2,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "AP-505H",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 3.3,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 2.9,
                        chains: 2,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "AP-515",
                // Datasheet gain is "effective per-antenna pattern," not the combined average pattern used elsewhere
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 3.8,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 4.6,
                        chains: 4,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "AP-535",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 1.9,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 3.5,
                        chains: 4,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "AP-565",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 3.2,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 5.4,
                        chains: 2,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "AP-615",
                modes: [
                    {
                        mode: "2.4 / 5 GHz",
                        radios: [
                            {
                                name: "2.4 GHz",
                                band: "2.4",
                                antennaType: "internal",
                                gain: 2.0,
                                chains: 2,
                                maxEirp: null,
                            },
                            {
                                name: "5 GHz",
                                band: "5",
                                antennaType: "internal",
                                gain: 3.5,
                                chains: 2,
                                maxEirp: null,
                            },
                        ],
                    },
                    {
                        mode: "2.4 / 6 GHz",
                        radios: [
                            {
                                name: "2.4 GHz",
                                band: "2.4",
                                antennaType: "internal",
                                gain: 2.0,
                                chains: 2,
                                maxEirp: null,
                            },
                            {
                                name: "6 GHz",
                                band: "6",
                                antennaType: "internal",
                                gain: 3.4,
                                chains: 2,
                                maxEirp: null,
                            },
                        ],
                    },
                    {
                        mode: "5 / 6 GHz",
                        radios: [
                            {
                                name: "5 GHz",
                                band: "5",
                                antennaType: "internal",
                                gain: 3.5,
                                chains: 2,
                                maxEirp: null,
                            },
                            {
                                name: "6 GHz",
                                band: "6",
                                antennaType: "internal",
                                gain: 3.4,
                                chains: 2,
                                maxEirp: null,
                            },
                        ],
                    },
                ],
            },
            {
                model: "AP-635",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 2.9,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 4.9,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "6 GHz",
                        band: "6",
                        antennaType: "internal",
                        gain: 4.3,
                        chains: 2,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "AP-655",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 3.3,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 2.9,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "6 GHz",
                        band: "6",
                        antennaType: "internal",
                        gain: 4,
                        chains: 4,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "AP-675",
                // Datasheet gain figures are internally inconsistent between tables; using the antenna pattern section values
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 4.6,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 7.9,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "6 GHz",
                        band: "6",
                        antennaType: "internal",
                        gain: 6.2,
                        chains: 2,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "AP-725",
                modes: [
                    {
                        mode: "2.4 / 5 GHz",
                        radios: [
                            {
                                name: "2.4 GHz",
                                band: "2.4",
                                antennaType: "internal",
                                gain: 3.8,
                                chains: 2,
                                maxEirp: null,
                            },
                            {
                                name: "5 GHz",
                                band: "5",
                                antennaType: "internal",
                                gain: 4.7,
                                chains: 2,
                                maxEirp: null,
                            },
                        ],
                    },
                    {
                        mode: "2.4 / 6 GHz",
                        radios: [
                            {
                                name: "2.4 GHz",
                                band: "2.4",
                                antennaType: "internal",
                                gain: 3.8,
                                chains: 2,
                                maxEirp: null,
                            },
                            {
                                name: "6 GHz",
                                band: "6",
                                antennaType: "internal",
                                gain: 4.9,
                                chains: 2,
                                maxEirp: null,
                            },
                        ],
                    },
                    {
                        mode: "5 / 6 GHz",
                        radios: [
                            {
                                name: "5 GHz",
                                band: "5",
                                antennaType: "internal",
                                gain: 4.7,
                                chains: 2,
                                maxEirp: null,
                            },
                            {
                                name: "6 GHz",
                                band: "6",
                                antennaType: "internal",
                                gain: 4.9,
                                chains: 2,
                                maxEirp: null,
                            },
                        ],
                    },
                ],
            },
            {
                model: "AP-735",
                // Dual 5 GHz and Dual 6 GHz modes are documented by HPE as a future software release, not yet shipping
                modes: [
                    {
                        mode: "Standard",
                        radios: [
                            {
                                name: "2.4 GHz",
                                band: "2.4",
                                antennaType: "internal",
                                gain: 3.9,
                                chains: 2,
                                maxEirp: null,
                            },
                            {
                                name: "5 GHz",
                                band: "5",
                                antennaType: "internal",
                                gain: 4.1,
                                chains: 2,
                                maxEirp: null,
                            },
                            {
                                name: "6 GHz",
                                band: "6",
                                antennaType: "internal",
                                gain: 3.9,
                                chains: 2,
                                maxEirp: null,
                            },
                        ],
                    },
                    {
                        mode: "Dual 5 GHz",
                        radios: [
                            {
                                name: "5 GHz (Radio 1)",
                                band: "5",
                                antennaType: "internal",
                                gain: 2.5,
                                chains: 2,
                                maxEirp: null,
                            },
                            {
                                name: "5 GHz (Radio 2)",
                                band: "5",
                                antennaType: "internal",
                                gain: 4.1,
                                chains: 2,
                                maxEirp: null,
                            },
                            {
                                name: "6 GHz",
                                band: "6",
                                antennaType: "internal",
                                gain: 3.9,
                                chains: 2,
                                maxEirp: null,
                            },
                        ],
                    },
                    {
                        mode: "Dual 6 GHz",
                        radios: [
                            {
                                name: "5 GHz",
                                band: "5",
                                antennaType: "internal",
                                gain: 4.1,
                                chains: 2,
                                maxEirp: null,
                            },
                            {
                                name: "6 GHz (Radio 1)",
                                band: "6",
                                antennaType: "internal",
                                gain: 3.7,
                                chains: 2,
                                maxEirp: null,
                            },
                            {
                                name: "6 GHz (Radio 2)",
                                band: "6",
                                antennaType: "internal",
                                gain: 3.9,
                                chains: 2,
                                maxEirp: null,
                            },
                        ],
                    },
                ],
            },
            {
                model: "AP-755",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 3.1,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 3.6,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "6 GHz",
                        band: "6",
                        antennaType: "internal",
                        gain: 3.6,
                        chains: 4,
                        maxEirp: null,
                    },
                ],
            },
        ],
    },
    cambium: {
        name: "Cambium Networks",
        models: [
            {
                model: "XV3-8",
                modes: [
                    {
                        mode: "Single 5 GHz",
                        radios: [
                            {
                                name: "2.4 GHz",
                                band: "2.4",
                                antennaType: "internal",
                                gain: 5,
                                chains: 4,
                                maxEirp: 31,
                            },
                            {
                                name: "5 GHz",
                                band: "5",
                                antennaType: "internal",
                                gain: 6.7,
                                chains: 8,
                                maxEirp: 36,
                            },
                        ],
                    },
                    {
                        mode: "Dual 5 GHz",
                        radios: [
                            {
                                name: "2.4 GHz",
                                band: "2.4",
                                antennaType: "internal",
                                gain: 5,
                                chains: 4,
                                maxEirp: 31,
                            },
                            {
                                name: "5 GHz Low",
                                band: "5",
                                antennaType: "internal",
                                gain: 6.7,
                                chains: 4,
                                maxEirp: 36,
                            },
                            {
                                name: "5 GHz High",
                                band: "5",
                                antennaType: "internal",
                                gain: 6.7,
                                chains: 4,
                                maxEirp: 36,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    cisco: {
        name: "Cisco",
        models: [
            {
                model: "9120AXI",
                modes: [
                    {
                        mode: "Standard",
                        radios: [
                            {
                                name: "2.4 GHz",
                                band: "2.4",
                                antennaType: "internal",
                                gain: 0,
                                chains: 4,
                                maxEirp: null,
                            },
                            {
                                name: "5 GHz",
                                band: "5",
                                antennaType: "internal",
                                gain: 5,
                                chains: 4,
                                maxEirp: null,
                            },
                        ],
                    },
                    {
                        mode: "Dual 5 GHz",
                        radios: [
                            {
                                name: "5 GHz Low",
                                band: "5",
                                antennaType: "internal",
                                gain: 5,
                                chains: 4,
                                maxEirp: null,
                            },
                            {
                                name: "5 GHz High",
                                band: "5",
                                antennaType: "internal",
                                gain: 5,
                                chains: 4,
                                maxEirp: null,
                            },
                        ],
                    },
                ],
            },
            {
                model: "9130AXI",
                modes: [
                    {
                        mode: "Dual-Radio",
                        radios: [
                            {
                                name: "2.4 GHz",
                                band: "2.4",
                                antennaType: "internal",
                                gain: 4,
                                chains: 4,
                                maxEirp: null,
                            },
                            {
                                name: "5 GHz",
                                band: "5",
                                antennaType: "internal",
                                gain: 6,
                                chains: 8,
                                maxEirp: null,
                            },
                        ],
                    },
                    {
                        mode: "Tri-Radio",
                        radios: [
                            {
                                name: "2.4 GHz",
                                band: "2.4",
                                antennaType: "internal",
                                gain: 4,
                                chains: 4,
                                maxEirp: null,
                            },
                            {
                                name: "5 GHz Low",
                                band: "5",
                                antennaType: "internal",
                                gain: 6,
                                chains: 4,
                                maxEirp: null,
                            },
                            {
                                name: "5 GHz High",
                                band: "5",
                                antennaType: "internal",
                                gain: 6,
                                chains: 4,
                                maxEirp: null,
                            },
                        ],
                    },
                ],
            },
            {
                model: "9130AXE",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "external",
                        gain: 0,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "external",
                        gain: 0,
                        chains: 8,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "9136I",
                modes: [
                    {
                        mode: "Tri-Radio",
                        radios: [
                            {
                                name: "2.4 GHz",
                                band: "2.4",
                                antennaType: "internal",
                                gain: 4,
                                chains: 4,
                                maxEirp: null,
                            },
                            {
                                name: "5 GHz",
                                band: "5",
                                antennaType: "internal",
                                gain: 5,
                                chains: 8,
                                maxEirp: null,
                            },
                            {
                                name: "6 GHz",
                                band: "6",
                                antennaType: "internal",
                                gain: 6,
                                chains: 4,
                                maxEirp: null,
                            },
                        ],
                    },
                    {
                        mode: "Quad-Radio",
                        radios: [
                            {
                                name: "2.4 GHz",
                                band: "2.4",
                                antennaType: "internal",
                                gain: 4,
                                chains: 4,
                                maxEirp: null,
                            },
                            {
                                name: "5 GHz Low",
                                band: "5",
                                antennaType: "internal",
                                gain: 5,
                                chains: 4,
                                maxEirp: null,
                            },
                            {
                                name: "5 GHz High",
                                band: "5",
                                antennaType: "internal",
                                gain: 5,
                                chains: 4,
                                maxEirp: null,
                            },
                            {
                                name: "6 GHz",
                                band: "6",
                                antennaType: "internal",
                                gain: 6,
                                chains: 4,
                                maxEirp: null,
                            },
                        ],
                    },
                ],
            },
            {
                model: "9166I",
                modes: [
                    {
                        mode: "Standard",
                        radios: [
                            {
                                name: "2.4 GHz",
                                band: "2.4",
                                antennaType: "internal",
                                gain: 3,
                                chains: 4,
                                maxEirp: null,
                            },
                            {
                                name: "5 GHz",
                                band: "5",
                                antennaType: "internal",
                                gain: 5,
                                chains: 4,
                                maxEirp: null,
                            },
                            {
                                name: "6 GHz",
                                band: "6",
                                antennaType: "internal",
                                gain: 4,
                                chains: 4,
                                maxEirp: null,
                            },
                        ],
                    },
                    {
                        mode: "Dual 5 GHz",
                        radios: [
                            {
                                name: "2.4 GHz",
                                band: "2.4",
                                antennaType: "internal",
                                gain: 3,
                                chains: 4,
                                maxEirp: null,
                            },
                            {
                                name: "5 GHz",
                                band: "5",
                                antennaType: "internal",
                                gain: 5,
                                chains: 4,
                                maxEirp: null,
                            },
                            {
                                name: "5 GHz (XOR)",
                                band: "5",
                                antennaType: "internal",
                                gain: 4,
                                chains: 4,
                                maxEirp: null,
                            },
                        ],
                    },
                ],
            },
            {
                model: "9166D1",
                modes: [
                    {
                        mode: "Standard",
                        radios: [
                            {
                                name: "2.4 GHz",
                                band: "2.4",
                                antennaType: "internal",
                                gain: 6,
                                chains: 4,
                                maxEirp: null,
                            },
                            {
                                name: "5 GHz",
                                band: "5",
                                antennaType: "internal",
                                gain: 6,
                                chains: 4,
                                maxEirp: null,
                            },
                            {
                                name: "6 GHz",
                                band: "6",
                                antennaType: "internal",
                                gain: 8,
                                chains: 4,
                                maxEirp: null,
                            },
                        ],
                    },
                    {
                        mode: "Dual 5 GHz",
                        radios: [
                            {
                                name: "2.4 GHz",
                                band: "2.4",
                                antennaType: "internal",
                                gain: 6,
                                chains: 4,
                                maxEirp: null,
                            },
                            {
                                name: "5 GHz",
                                band: "5",
                                antennaType: "internal",
                                gain: 6,
                                chains: 4,
                                maxEirp: null,
                            },
                            {
                                name: "5 GHz (XOR)",
                                band: "5",
                                antennaType: "internal",
                                gain: 8,
                                chains: 4,
                                maxEirp: null,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    meraki: {
        name: "Cisco Meraki",
        models: [
            {
                model: "MR45",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 5.4,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 6,
                        chains: 4,
                        maxEirp: null,
                    },
                ],
            },
        ],
    },
    extreme: {
        name: "Extreme Networks",
        models: [
            {
                model: "AP3000",
                modes: [
                    {
                        mode: "Mode 1",
                        radios: [
                            {
                                name: "Radio 1",
                                band: "2.4",
                                antennaType: "internal",
                                gain: 4.2,
                                chains: 2,
                                maxEirp: null,
                            },
                            {
                                name: "Radio 2",
                                band: "5",
                                antennaType: "internal",
                                gain: 5.07,
                                chains: 2,
                                maxEirp: null,
                            },
                        ],
                    },
                    {
                        mode: "Mode 2",
                        radios: [
                            {
                                name: "Radio 1",
                                band: "6",
                                antennaType: "internal",
                                gain: 5.14,
                                chains: 2,
                                maxEirp: null,
                            },
                            {
                                name: "Radio 2",
                                band: "5",
                                antennaType: "internal",
                                gain: 5.07,
                                chains: 2,
                                maxEirp: null,
                            },
                        ],
                    },
                ],
            },
            {
                model: "AP3000X",
                modes: [
                    {
                        mode: "Mode 1",
                        radios: [
                            {
                                name: "Radio 1",
                                band: "2.4",
                                antennaType: "detachable",
                                gain: 3.23,
                                chains: 2,
                                maxEirp: null,
                            },
                            {
                                name: "Radio 2",
                                band: "5",
                                antennaType: "detachable",
                                gain: 5.22,
                                chains: 2,
                                maxEirp: null,
                            },
                        ],
                    },
                    {
                        mode: "Mode 2",
                        radios: [
                            {
                                name: "Radio 1",
                                band: "6",
                                antennaType: "detachable",
                                gain: 5.49,
                                chains: 2,
                                maxEirp: null,
                            },
                            {
                                name: "Radio 2",
                                band: "5",
                                antennaType: "detachable",
                                gain: 5.22,
                                chains: 2,
                                maxEirp: null,
                            },
                        ],
                    },
                ],
            },
            {
                model: "AP4000",
                modes: [
                    {
                        mode: "Mode 1",
                        radios: [
                            {
                                name: "2.4 GHz",
                                band: "2.4",
                                antennaType: "internal",
                                gain: 3.9,
                                chains: 2,
                                maxEirp: null,
                            },
                            {
                                name: "5 GHz",
                                band: "5",
                                antennaType: "internal",
                                gain: 5.1,
                                chains: 2,
                                maxEirp: null,
                            },
                            {
                                name: "6 GHz",
                                band: "6",
                                antennaType: "internal",
                                gain: 5.3,
                                chains: 2,
                                maxEirp: null,
                            },
                        ],
                    },
                    {
                        mode: "Mode 2",
                        radios: [
                            {
                                name: "2.4 GHz",
                                band: "2.4",
                                antennaType: "internal",
                                gain: 3.9,
                                chains: 2,
                                maxEirp: null,
                            },
                            {
                                name: "5 GHz",
                                band: "5",
                                antennaType: "internal",
                                gain: 5.1,
                                chains: 2,
                                maxEirp: null,
                            },
                        ],
                    },
                ],
            },
            {
                model: "AP5022",
                modes: [
                    {
                        mode: "Mode 1",
                        radios: [
                            {
                                name: "2.4 GHz",
                                band: "2.4",
                                antennaType: "internal",
                                gain: 3.5,
                                chains: 4,
                                maxEirp: null,
                            },
                            {
                                name: "5 GHz",
                                band: "5",
                                antennaType: "internal",
                                gain: 6.7,
                                chains: 4,
                                maxEirp: null,
                            },
                            {
                                name: "6 GHz",
                                band: "6",
                                antennaType: "internal",
                                gain: 5.7,
                                chains: 4,
                                maxEirp: null,
                            },
                        ],
                    },
                    {
                        mode: "Mode 2",
                        radios: [
                            {
                                name: "5 GHz Low",
                                band: "5",
                                antennaType: "internal",
                                gain: 5.3,
                                chains: 4,
                                maxEirp: null,
                            },
                            {
                                name: "5 GHz High",
                                band: "5",
                                antennaType: "internal",
                                gain: 6.7,
                                chains: 4,
                                maxEirp: null,
                            },
                            {
                                name: "6 GHz",
                                band: "6",
                                antennaType: "internal",
                                gain: 5.7,
                                chains: 4,
                                maxEirp: null,
                            },
                        ],
                    },
                    {
                        mode: "Mode 3",
                        radios: [
                            {
                                name: "5 GHz",
                                band: "5",
                                antennaType: "internal",
                                gain: 5.1,
                                chains: 4,
                                maxEirp: null,
                            },
                            {
                                name: "6 GHz High",
                                band: "6",
                                antennaType: "internal",
                                gain: 6.7,
                                chains: 4,
                                maxEirp: null,
                            },
                            {
                                name: "6 GHz Low",
                                band: "6",
                                antennaType: "internal",
                                gain: 5.7,
                                chains: 4,
                                maxEirp: null,
                            },
                        ],
                    },
                ],
            },
            {
                model: "AP5022S6D",
                modes: [
                    {
                        mode: "Mode 1",
                        radios: [
                            {
                                name: "2.4 GHz",
                                band: "2.4",
                                antennaType: "internal",
                                gain: 3.5,
                                chains: 4,
                                maxEirp: null,
                            },
                            {
                                name: "5 GHz",
                                band: "5",
                                antennaType: "internal",
                                gain: 7,
                                chains: 4,
                                maxEirp: null,
                            },
                            {
                                name: "6 GHz",
                                band: "6",
                                antennaType: "internal",
                                gain: 7.2,
                                chains: 4,
                                maxEirp: null,
                            },
                        ],
                    },
                    {
                        mode: "Mode 2",
                        radios: [
                            {
                                name: "5 GHz Low",
                                band: "5",
                                antennaType: "internal",
                                gain: 6.7,
                                chains: 4,
                                maxEirp: null,
                            },
                            {
                                name: "5 GHz High",
                                band: "5",
                                antennaType: "internal",
                                gain: 7,
                                chains: 4,
                                maxEirp: null,
                            },
                            {
                                name: "6 GHz",
                                band: "6",
                                antennaType: "internal",
                                gain: 7.2,
                                chains: 4,
                                maxEirp: null,
                            },
                        ],
                    },
                    {
                        mode: "Mode 3",
                        radios: [
                            {
                                name: "5 GHz",
                                band: "5",
                                antennaType: "internal",
                                gain: 6.5,
                                chains: 4,
                                maxEirp: null,
                            },
                            {
                                name: "6 GHz High",
                                band: "6",
                                antennaType: "internal",
                                gain: 7,
                                chains: 4,
                                maxEirp: null,
                            },
                            {
                                name: "6 GHz Low",
                                band: "6",
                                antennaType: "internal",
                                gain: 7.2,
                                chains: 4,
                                maxEirp: null,
                            },
                        ],
                    },
                ],
            },
            {
                model: "AP5022FX",
                modes: [
                    {
                        mode: "Mode 1",
                        radios: [
                            {
                                name: "2.4 GHz",
                                band: "2.4",
                                antennaType: "external",
                                gain: 0,
                                chains: 4,
                                maxEirp: null,
                            },
                            {
                                name: "5 GHz",
                                band: "5",
                                antennaType: "external",
                                gain: 0,
                                chains: 4,
                                maxEirp: null,
                            },
                            {
                                name: "6 GHz",
                                band: "6",
                                antennaType: "internal",
                                gain: 5.7, // Not sure, datasheet doesn't say
                                chains: 4,
                                maxEirp: null,
                            },
                        ],
                    },
                    {
                        mode: "Mode 2",
                        radios: [
                            {
                                name: "5 GHz Low",
                                band: "5",
                                antennaType: "external",
                                gain: 0,
                                chains: 4,
                                maxEirp: null,
                            },
                            {
                                name: "5 GHz High",
                                band: "5",
                                antennaType: "external",
                                gain: 0,
                                chains: 4,
                                maxEirp: null,
                            },
                            {
                                name: "6 GHz",
                                band: "6",
                                antennaType: "internal",
                                gain: 5.7, // Not sure, datasheet doesn't say
                                chains: 4,
                                maxEirp: null,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    fortinet: {
        name: "Fortinet",
        models: [
            {
                model: "241K",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 4.5,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 5.7,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "6 GHz",
                        band: "6",
                        antennaType: "internal",
                        gain: 5.25,
                        chains: 2,
                        maxEirp: null,
                    },
                ],
            },
        ],
    },
    huawei: {
        name: "Huawei",
        models: [
            {
                model: "5576-26",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 4,
                        chains: 2,
                        maxEirp: null, // "23 dBm (combined power)", is that EIRP?
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 5,
                        chains: 4,
                        maxEirp: null, // 26 dBm (combined power)
                    },
                ],
            },
            {
                model: "6576-56TP",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 4,
                        chains: 2,
                        maxEirp: null, // "23 dBm (combined power)", is that EIRP?
                    },
                    {
                        name: "5 GHz-1",
                        band: "5",
                        antennaType: "internal",
                        gain: 5,
                        chains: 2,
                        maxEirp: null, // 23 dBm (combined power)
                    },
                    {
                        name: "5 GHz-2",
                        band: "5",
                        antennaType: "internal",
                        gain: 5,
                        chains: 4,
                        maxEirp: null, // 26 dBm (combined power)
                    },
                ],
            },
        ],
    },
    juniper: {
        name: "HPE Juniper",
        models: [
            {
                model: "AP12",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 3,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 6,
                        chains: 2,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "AP17",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 4,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 6,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "6 GHz",
                        band: "6",
                        antennaType: "internal",
                        gain: 6,
                        chains: 2,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "AP21",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 4,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 5,
                        chains: 2,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "AP24",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 4,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 6,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "6 GHz",
                        band: "6",
                        antennaType: "internal",
                        gain: 6,
                        chains: 2,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "AP27",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 4,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 6,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "6 GHz",
                        band: "6",
                        antennaType: "internal",
                        gain: 6,
                        chains: 2,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "AP27E",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "external",
                        gain: 0,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "external",
                        gain: 0,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "6 GHz",
                        band: "6",
                        antennaType: "external",
                        gain: 0,
                        chains: 2,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "AP32",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 5,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 6,
                        chains: 4,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "AP32E",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "external",
                        gain: 0,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "external",
                        gain: 0,
                        chains: 4,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "AP33",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 5,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 6,
                        chains: 4,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "AP34",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 4,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 6,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "6 GHz",
                        band: "6",
                        antennaType: "internal",
                        gain: 6,
                        chains: 2,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "AP36",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 6,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 8,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "6 GHz",
                        band: "6",
                        antennaType: "internal",
                        gain: 8,
                        chains: 4,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "AP36M",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "detachable",
                        gain: 6,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "detachable",
                        gain: 8,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "6 GHz",
                        band: "6",
                        antennaType: "detachable",
                        gain: 8,
                        chains: 4,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "AP37",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 6,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 8,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "6 GHz",
                        band: "6",
                        antennaType: "internal",
                        gain: 8,
                        chains: 4,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "AP41",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 4,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 6,
                        chains: 4,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "AP41E",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "external",
                        gain: 0,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "external",
                        gain: 0,
                        chains: 4,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "AP43",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 4,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 6,
                        chains: 4,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "AP43E",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "external",
                        gain: 0,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "external",
                        gain: 0,
                        chains: 4,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "AP45",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 4,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 6,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "6 GHz",
                        band: "6",
                        antennaType: "internal",
                        gain: 6,
                        chains: 4,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "AP45E",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "external",
                        gain: 0,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "external",
                        gain: 0,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "6 GHz",
                        band: "6",
                        antennaType: "external",
                        gain: 0,
                        chains: 4,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "AP47",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 4,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 6,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "6 GHz",
                        band: "6",
                        antennaType: "internal",
                        gain: 6,
                        chains: 4,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "AP47D",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 6,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 8,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "6 GHz",
                        band: "6",
                        antennaType: "internal",
                        gain: 8,
                        chains: 4,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "AP47E",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "external",
                        gain: 0,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "external",
                        gain: 0,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "6 GHz",
                        band: "6",
                        antennaType: "external",
                        gain: 0,
                        chains: 4,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "AP61",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 4,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 6,
                        chains: 4,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "AP61E",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "external",
                        gain: 0,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "external",
                        gain: 0,
                        chains: 4,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "AP63",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 4,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 6,
                        chains: 4,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "AP63E",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "external",
                        gain: 0,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "external",
                        gain: 0,
                        chains: 4,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "AP64",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 4,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 6,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "6 GHz",
                        band: "6",
                        antennaType: "internal",
                        gain: 6,
                        chains: 2,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "AP66",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 4,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 6,
                        chains: 2,
                        maxEirp: null,
                    },
                    {
                        name: "6 GHz",
                        band: "6",
                        antennaType: "internal",
                        gain: 6,
                        chains: 2,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "AP66D",
                modes: [
                    {
                        mode: "90x90",
                        radios: [
                            {
                                name: "2.4 GHz",
                                band: "2.4",
                                antennaType: "internal",
                                gain: 6,
                                chains: 2,
                                maxEirp: null,
                            },
                            {
                                name: "5 GHz",
                                band: "5",
                                antennaType: "internal",
                                gain: 5,
                                chains: 2,
                                maxEirp: null,
                            },
                            {
                                name: "6 GHz",
                                band: "6",
                                antennaType: "internal",
                                gain: 7,
                                chains: 2,
                                maxEirp: null,
                            },
                        ],
                    },
                    {
                        mode: "90x30",
                        radios: [
                            {
                                name: "2.4 GHz",
                                band: "2.4",
                                antennaType: "internal",
                                gain: 6,
                                chains: 2,
                                maxEirp: null,
                            },
                            {
                                name: "5 GHz",
                                band: "5",
                                antennaType: "internal",
                                gain: 7,
                                chains: 2,
                                maxEirp: null,
                            },
                            {
                                name: "6 GHz",
                                band: "6",
                                antennaType: "internal",
                                gain: 8,
                                chains: 2,
                                maxEirp: null,
                            },
                        ],
                    },
                    {
                        mode: "30x30",
                        radios: [
                            {
                                name: "2.4 GHz",
                                band: "2.4",
                                antennaType: "internal",
                                gain: 6,
                                chains: 2,
                                maxEirp: null,
                            },
                            {
                                name: "5 GHz",
                                band: "5",
                                antennaType: "internal",
                                gain: 10,
                                chains: 2,
                                maxEirp: null,
                            },
                            {
                                name: "6 GHz",
                                band: "6",
                                antennaType: "internal",
                                gain: 10,
                                chains: 2,
                                maxEirp: null,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    nile: {
        name: "Nile",
        models: [
            {
                model: "NWA1000",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 2,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 4.8,
                        chains: 4,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "NWA1050",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 5,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 5,
                        chains: 4,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "NWA1100",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 6.2,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 6.7,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "6 GHz",
                        band: "6",
                        antennaType: "internal",
                        gain: 5.2,
                        chains: 4,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "NWA1200",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 4.28,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 6.89,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "6 GHz",
                        band: "6",
                        antennaType: "internal",
                        gain: 4.68,
                        chains: 4,
                        maxEirp: null,
                    },
                ],
            },
            {
                model: "NWA1250", // 60-degree sector antenna
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 7.285,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 8.02,
                        chains: 4,
                        maxEirp: null,
                    },
                    {
                        name: "6 GHz",
                        band: "6",
                        antennaType: "internal",
                        gain: 7.53,
                        chains: 4,
                        maxEirp: null,
                    },
                ],
            },
        ],
    },
    ruckus: {
        name: "Ruckus",
        models: [
            {
                model: "R350",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 3,
                        chains: 2,
                        maxEirp: 23, // Datasheet says "Peak Transmit Power (aggregate across MIMO chains). Do I need to subtract antenna gain so that this isn't EIRP?
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 3,
                        chains: 2,
                        maxEirp: 23, // Datasheet says "Peak Transmit Power (aggregate across MIMO chains). Do I need to subtract antenna gain so that this isn't EIRP?
                    },
                ],
            },
            {
                model: "R350e",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 3,
                        chains: 2,
                        maxEirp: 23, // Datasheet says "Peak Transmit Power (aggregate across MIMO chains). Do I need to subtract antenna gain so that this isn't EIRP?
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 3,
                        chains: 2,
                        maxEirp: 23, // Datasheet says "Peak Transmit Power (aggregate across MIMO chains). Do I need to subtract antenna gain so that this isn't EIRP?
                    },
                ],
            },
            {
                model: "R650",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 3,
                        chains: 2,
                        maxEirp: 26, // Datasheet calls this "Peak Transmit Power (Tx port/chain + Combining gain)"
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 3,
                        chains: 4,
                        maxEirp: 28, // Datasheet calls this "Peak Transmit Power (Tx port/chain + Combining gain)"
                    },
                ],
            },
            {
                model: "R670",
                modes: [
                    {
                        mode: "Tri-band",
                        radios: [
                            {
                                name: "2.4 GHz",
                                band: "2.4",
                                antennaType: "internal",
                                gain: 4,
                                chains: 2,
                                maxEirp: 25, // Datasheet says "Peak Transmit Power (aggregate across MIMO chains)". Do I need to subtract antenna gain so that this isn't EIRP?
                            },
                            {
                                name: "5 GHz",
                                band: "5",
                                antennaType: "internal",
                                gain: 4,
                                chains: 2,
                                maxEirp: 25, // Datasheet says "Peak Transmit Power (aggregate across MIMO chains)". Do I need to subtract antenna gain so that this isn't EIRP?
                            },
                            {
                                name: "6 GHz",
                                band: "6",
                                antennaType: "internal",
                                gain: 4,
                                chains: 2,
                                maxEirp: 25, // Datasheet says "Peak Transmit Power (aggregate across MIMO chains)". Do I need to subtract antenna gain so that this isn't EIRP?
                            },
                        ],
                    },
                    {
                        mode: "Dual-band",
                        radios: [
                            {
                                name: "2.4 GHz",
                                band: "2.4",
                                antennaType: "internal",
                                gain: 4,
                                chains: 2,
                                maxEirp: 25, // Datasheet says "Peak Transmit Power (aggregate across MIMO chains)". Do I need to subtract antenna gain so that this isn't EIRP?
                            },
                            {
                                name: "5 GHz",
                                band: "5",
                                antennaType: "internal",
                                gain: 4,
                                chains: 4,
                                maxEirp: 28, // Datasheet says "Peak Transmit Power (aggregate across MIMO chains)". Do I need to subtract antenna gain so that this isn't EIRP?
                            },
                        ],
                    },
                ],
            },
            {
                model: "R760",
                modes: [
                    {
                        mode: "Dual-band",
                        radios: [
                            {
                                name: "2.4 GHz",
                                band: "2.4",
                                antennaType: "internal",
                                gain: 4,
                                chains: 4,
                                maxEirp: 22,
                            },
                            {
                                name: "5 GHz One",
                                band: "5",
                                antennaType: "internal",
                                gain: 6,
                                chains: 4,
                                maxEirp: 22,
                            },
                            {
                                name: "5 GHz Two",
                                band: "5",
                                antennaType: "internal",
                                gain: 6,
                                chains: 4,
                                maxEirp: 22,
                            },
                        ],
                    },
                    {
                        mode: "Tri-band",
                        radios: [
                            {
                                name: "2.4 GHz",
                                band: "2.4",
                                antennaType: "internal",
                                gain: 4,
                                chains: 4,
                                maxEirp: 22,
                            },
                            {
                                name: "5 GHz",
                                band: "5",
                                antennaType: "internal",
                                gain: 6,
                                chains: 4,
                                maxEirp: 22,
                            },
                            {
                                name: "6 GHz",
                                band: "6",
                                antennaType: "internal",
                                gain: 6,
                                chains: 4,
                                maxEirp: 22,
                            },
                        ],
                    },
                ],
            },
            {
                model: "R770",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 4,
                        chains: 2,
                        maxEirp: 26, // Datasheet says "Peak Transmit Power". Do I need to subtract antenna gain so that this isn't EIRP?
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 4,
                        chains: 4,
                        maxEirp: 28, // Datasheet says "Peak Transmit Power". Do I need to subtract antenna gain so that this isn't EIRP?
                    },
                    {
                        name: "6 GHz",
                        band: "6",
                        antennaType: "internal",
                        gain: 4,
                        chains: 2,
                        maxEirp: 25, // // Datasheet says "Peak Transmit Power". Do I need to subtract antenna gain so that this isn't EIRP?
                    },
                ],
            },
        ],
    },
    ubiquiti: {
        name: "Ubiquiti UniFi",
        models: [
            {
                model: "U7 Lite",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 4,
                        chains: 2,
                        maxEirp: 23, // Labeled as "Max. TX Power", so I'm not sure it's EIRP
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 5,
                        chains: 2,
                        maxEirp: 24, // Labeled as "Max. TX Power", so I'm not sure it's EIRP
                    },
                ],
            },
            {
                model: "U7 Outdoor",
                modes: [
                    {
                        mode: "Directional antenna",
                        radios: [
                            {
                                name: "2.4 GHz",
                                band: "2.4",
                                antennaType: "internal",
                                gain: 8,
                                chains: 2,
                                maxEirp: 23, // "Max TxPower". Not sure if Total Conducted or EIRP
                            },
                            {
                                name: "5 GHz",
                                band: "5",
                                antennaType: "internal",
                                gain: 12.5,
                                chains: 2,
                                maxEirp: 26, // "Max TxPower". Not sure if Total Conducted or EIRP
                            },
                        ],
                    },
                    {
                        mode: "External omni",
                        radios: [
                            {
                                name: "2.4 GHz",
                                band: "2.4",
                                antennaType: "external",
                                gain: 3,
                                chains: 2,
                                maxEirp: 23, // "Max TxPower". Not sure if Total Conducted or EIRP
                            },
                            {
                                name: "5 GHz",
                                band: "5",
                                antennaType: "external",
                                gain: 4,
                                chains: 2,
                                maxEirp: 26, // "Max TxPower". Not sure if Total Conducted or EIRP
                            },
                        ],
                    },
                ],
            },
            {
                model: "U7 Pro",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 4,
                        chains: 2,
                        maxEirp: 23, // Labeled as "Max. TX Power", so I'm not sure it's EIRP
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 6,
                        chains: 2,
                        maxEirp: 26, // Labeled as "Max. TX Power", so I'm not sure it's EIRP
                    },
                    {
                        name: "6 GHz",
                        band: "6",
                        antennaType: "internal",
                        gain: 5.8,
                        chains: 2,
                        maxEirp: 23, // Labeled as "Max. TX Power", so I'm not sure it's EIRP
                    },
                ],
            },
            {
                model: "U7 Pro Wall",
                radios: [
                    {
                        name: "2.4 GHz",
                        band: "2.4",
                        antennaType: "internal",
                        gain: 4,
                        chains: 2,
                        maxEirp: 22, // Labeled as "Max. TX Power", so I'm not sure it's EIRP
                    },
                    {
                        name: "5 GHz",
                        band: "5",
                        antennaType: "internal",
                        gain: 5,
                        chains: 2,
                        maxEirp: 26, // Labeled as "Max. TX Power", so I'm not sure it's EIRP
                    },
                    {
                        name: "6 GHz",
                        band: "6",
                        antennaType: "internal",
                        gain: 6,
                        chains: 2,
                        maxEirp: 23, // Labeled as "Max. TX Power", so I'm not sure it's EIRP
                    },
                ],
            },
            {
                model: "U7 Pro Outdoor (US)",
                modes: [
                    {
                        mode: "Internal Antennas",
                        radios: [
                            {
                                name: "2.4 GHz",
                                band: "2.4",
                                antennaType: "internal",
                                gain: 8,
                                chains: 2,
                                maxEirp: 23,
                            },
                            {
                                name: "5 GHz",
                                band: "5",
                                antennaType: "internal",
                                gain: 11,
                                chains: 2,
                                maxEirp: 26,
                            },
                            {
                                name: "6 GHz",
                                band: "6",
                                antennaType: "internal",
                                gain: 10,
                                chains: 2,
                                maxEirp: 26, // "Max Tx Power"
                            },
                        ],
                    },
                    {
                        mode: "External Antennas",
                        radios: [
                            {
                                name: "2.4 GHz",
                                band: "2.4",
                                antennaType: "external",
                                gain: 6,
                                chains: 2,
                                maxEirp: 23,
                            },
                            {
                                name: "5 GHz",
                                band: "5",
                                antennaType: "external",
                                gain: 8,
                                chains: 2,
                                maxEirp: 26,
                            },
                            {
                                name: "6 GHz",
                                band: "6",
                                antennaType: "internal",
                                gain: 10,
                                chains: 2,
                                maxEirp: 26,
                            },
                        ],
                    },
                ],
            },
            {
                model: "U7 Pro Outdoor (EU)",
                modes: [
                    {
                        mode: "Internal Antennas",
                        radios: [
                            {
                                name: "2.4 GHz",
                                band: "2.4",
                                antennaType: "internal",
                                gain: 8,
                                chains: 2,
                                maxEirp: 29,
                            },
                            {
                                name: "5 GHz",
                                band: "5",
                                antennaType: "internal",
                                gain: 11,
                                chains: 2, // The technical page says 4, but WiFi Explorer Pro says it's advertising 2
                                maxEirp: 26,
                            },
                        ],
                    },
                    {
                        mode: "External Antennas",
                        radios: [
                            {
                                name: "2.4 GHz",
                                band: "2.4",
                                antennaType: "external",
                                gain: 6,
                                chains: 2,
                                maxEirp: 23,
                            },
                            {
                                name: "5 GHz",
                                band: "5",
                                antennaType: "external",
                                gain: 8,
                                chains: 2,
                                maxEirp: 29,
                            },
                        ],
                    },
                ],
            },
        ],
    },
};

// Meraki shares hardware with Cisco, so list the Cisco models
// (by reference, to avoid duplicating radio data) before Meraki's own.
aps.meraki.models = [...aps.cisco.models, ...aps.meraki.models];
