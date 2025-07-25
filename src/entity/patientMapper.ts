import { Patient } from "../entity/Patient";

export function patientMapper(patient: Patient) {
return {
    "resourceType": "Bundle",
    "id": patient.uuid,
    "meta": {
        "lastUpdated": "2025-07-25T00:11:16.201+03:00"
    },
    "type": "searchset",
    "total": 1,
    "link": [
        {
            "relation": "self",
            "url": `https://hie-professionals-registry-service/facade/fhir/Patient?identifierNumber=${patient.nationalId}&identifierType=National%20ID`
        }
    ],
    "entry": [
        {
            "resource": {
                "resourceType": "Patient",
                "id": patient.id,
                "extension": [
                    {
                        "url": "https://ts.kenya-hie.health/fhir/StructureDefinition/person_with_disability",
                        "valueString": "0"
                    },
                    {
                        "url": "https://ts.kenya-hie.health/fhir/StructureDefinition/citizenship",
                        "valueString": "kenyan"
                    }
                ],
                "identifier": [
                    {
                        "use": "official",
                        "type": {
                            "coding": [
                                {
                                    "system": "https://ts.kenya-hie.health/Codesystem/identifier-types",
                                    "code": "national-id",
                                    "display": "National ID"
                                }
                            ]
                        },
                        "value": patient.nationalId
                    },
                    {
                        "use": "official",
                        "type": {
                            "coding": [
                                {
                                    "system": "https://ts.kenya-hie.health/Codesystem/identifier-types",
                                    "code": "wallet-id",
                                    "display": "Wallet ID"
                                }
                            ]
                        },
                        "value": patient.walletId
                    },
                    {
                        "use": "official",
                        "type": {
                            "coding": [
                                {
                                    "system": "https://ts.kenya-hie.health/Codesystem/identifier-types",
                                    "code": "sha-number",
                                    "display": "SHA Number"
                                }
                            ]
                        },
                        "value": patient.shaNumber
                    },
                    {
                        "use": "official",
                        "type": {
                            "coding": [
                                {
                                    "system": "https://ts.kenya-hie.health/Codesystem/identifier-types",
                                    "code": "household-number",
                                    "display": "Household Number"
                                }
                            ]
                        },
                        "value": patient.householdNumber
                    }
                ],
                "active": true,
                "name": [
                    {
                        "text": `${patient.given} ${patient.family}`,
                        "family": patient.family,
                        "given": patient.given.split(" ")
                    }
                ],
                "telecom": [
                    {
                        "system": "phone",
                        "value": patient.phoneNumber
                    }
                ],
                "gender": patient.gender,
                "birthDate": patient.birthDate,
                "address": [
                    {
                        "extension": [
                            {
                                "url": "https://ts.kenya-hie.health/fhir/StructureDefinition/patients-village_estate",
                                "valueString": patient.village
                            }
                        ],
                        "country": "Kenya"
                    }
                ],
                "maritalStatus": {
                    "coding": [
                        {
                            "system": "https://ts.kenya-hie.health/Codesystem/marital-status",
                            "code": "single",
                            "display": "Single"
                        }
                    ]
                },
                "contact": [
                    {
                        "id": "CR1081722092387-4",
                        "extension": [
                            {
                                "url": "identifiers",
                                "valueIdentifier": {
                                    "use": "official",
                                    "type": {
                                        "coding": [
                                            {
                                                "system": "https://ts.kenya-hie.health/Codesystem/identifier-types",
                                                "code": "birth-certificate",
                                                "display": "Birth Certificate"
                                            }
                                        ]
                                    },
                                    "value": "897986455"
                                }
                            },
                            {
                                "url": "identifiers",
                                "valueIdentifier": {
                                    "use": "official",
                                    "type": {
                                        "coding": [
                                            {
                                                "system": "https://ts.kenya-hie.health/Codesystem/identifier-types",
                                                "code": "sha-number",
                                                "display": "SHA Number"
                                            }
                                        ]
                                    },
                                    "value": "SHA1081722092387-4"
                                }
                            },
                            {
                                "url": "identifiers",
                                "valueIdentifier": {
                                    "use": "official",
                                    "type": {
                                        "coding": [
                                            {
                                                "system": "https://ts.kenya-hie.health/Codesystem/identifier-types",
                                                "code": "household-number",
                                                "display": "Household Number"
                                            }
                                        ]
                                    },
                                    "value": "BY32923183-3"
                                }
                            },
                            {
                                "url": "https://ts.kenya-hie.health/fhir/StructureDefinition/date_of_birth",
                                "valueString": "2023-11-09"
                            },
                            {
                                "url": "https://ts.kenya-hie.health/fhir/StructureDefinition/person_with_disability",
                                "valueString": "0"
                            },
                            {
                                "url": "https://ts.kenya-hie.health/fhir/StructureDefinition/preferred_primary_care_network",
                                "valueString": "ruaraka"
                            },
                            {
                                "url": "https://ts.kenya-hie.health/fhir/StructureDefinition/disability_category",
                                "valueString": "physical"
                            },
                            {
                                "url": "https://ts.kenya-hie.health/fhir/StructureDefinition/disability_subcategory",
                                "valueString": "test"
                            },
                            {
                                "url": "https://ts.kenya-hie.health/fhir/StructureDefinition/disability_cause",
                                "valueString": "test"
                            }
                        ],
                        "relationship": [
                            {
                                "coding": [
                                    {
                                        "system": "https://ts.kenya-hie.health/Codesystem/relationship-types",
                                        "code": "spouse",
                                        "display": "Spouse"
                                    }
                                ]
                            }
                        ],
                        "name": {
                            "text": "  TEO SUR NANO",
                            "family": "NANO",
                            "given": [
                                "TEO",
                                "SUR"
                            ]
                        },
                        "telecom": [
                            {
                                "system": "email",
                                "value": "jecihjoy@gmail.com"
                            },
                            {
                                "system": "phone",
                                "value": "0110525722"
                            }
                        ],
                        "address": {
                            "extension": [
                                {
                                    "url": "https://ts.kenya-hie.health/fhir/StructureDefinition/patients-county",
                                    "valueString": "Kenya"
                                },
                                {
                                    "url": "https://ts.kenya-hie.health/fhir/StructureDefinition/patients-sub-county",
                                    "valueString": "CHERANGANY"
                                },
                                {
                                    "url": "https://ts.kenya-hie.health/fhir/StructureDefinition/patients-ward",
                                    "valueString": "KAPLAMAI"
                                },
                                {
                                    "url": "https://ts.kenya-hie.health/fhir/StructureDefinition/patients-village_estate",
                                    "valueString": "Ngeria"
                                }
                            ],
                            "city": "TRANS NZOIA",
                            "country": "Kenya"
                        },
                        "gender": "male"
                    },
                    {
                        "id": "CR1414360658694-6",
                        "extension": [
                            {
                                "url": "identifiers",
                                "valueIdentifier": {
                                    "use": "official",
                                    "type": {
                                        "coding": [
                                            {
                                                "system": "https://ts.kenya-hie.health/Codesystem/identifier-types",
                                                "code": "birth-certificate",
                                                "display": "Birth Certificate"
                                            }
                                        ]
                                    },
                                    "value": "99999999"
                                }
                            },
                            {
                                "url": "identifiers",
                                "valueIdentifier": {
                                    "use": "official",
                                    "type": {
                                        "coding": [
                                            {
                                                "system": "https://ts.kenya-hie.health/Codesystem/identifier-types",
                                                "code": "sha-number",
                                                "display": "SHA Number"
                                            }
                                        ]
                                    },
                                    "value": "SHA1414360658694-6"
                                }
                            },
                            {
                                "url": "identifiers",
                                "valueIdentifier": {
                                    "use": "official",
                                    "type": {
                                        "coding": [
                                            {
                                                "system": "https://ts.kenya-hie.health/Codesystem/identifier-types",
                                                "code": "household-number",
                                                "display": "Household Number"
                                            }
                                        ]
                                    },
                                    "value": "BY32923183-3"
                                }
                            },
                            {
                                "url": "https://ts.kenya-hie.health/fhir/StructureDefinition/date_of_birth",
                                "valueString": "2023-11-14"
                            },
                            {
                                "url": "https://ts.kenya-hie.health/fhir/StructureDefinition/person_with_disability",
                                "valueString": "0"
                            }
                        ],
                        "relationship": [
                            {
                                "coding": [
                                    {
                                        "system": "https://ts.kenya-hie.health/Codesystem/relationship-types",
                                        "code": "child",
                                        "display": "Child"
                                    }
                                ]
                            }
                        ],
                        "name": {
                            "text": "  NENO NENO NENO",
                            "family": "NENO",
                            "given": [
                                "NENO",
                                "NENO"
                            ]
                        },
                        "address": {
                            "extension": [
                                {
                                    "url": "https://ts.kenya-hie.health/fhir/StructureDefinition/patients-sub-county",
                                    "valueString": "CHERANGANY"
                                },
                                {
                                    "url": "https://ts.kenya-hie.health/fhir/StructureDefinition/patients-ward",
                                    "valueString": "KAPLAMAI"
                                }
                            ],
                            "city": "TRANS NZOIA",
                            "country": "Kenya"
                        },
                        "gender": "male"
                    }
                ]
            }
        }
    ]
}

}