import { Patient } from "../entity/Patient";

export function bundleWrapper(patientResources: unknown, total: number) {
    const uuid = crypto.randomUUID();
    return {
        "resourceType": "Bundle",
    "id": uuid,
    "meta": {
        "lastUpdated": "2025-07-25T00:11:16.201+03:00"
    },
    "type": "searchset",
    "total": total,
    // "link": [
    //     {
    //         "relation": "self",
    //         "url": `https://bethelhospital.hmislocal.org/openmrs/ws/fhir2/R4/Patient?identifier=${patient.nationalId}`
    //     }
    // ],
    "entry": patientResources
    }
}
export function patientMapper(patient: Patient) {
    return {
            "resource": {
                "resourceType": "Patient",
                "id": patient.crId,
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
                // "address": [
                //     {
                //         "extension": [
                //             {
                //                 "url": "http://fhir.openmrs.org/ext/address",
                //                 "extension": [
                //                     {
                //                         "url": "http://fhir.openmrs.org/ext/address#address4",
                //                         "valueString": "Mihango"
                //                     }
                //                 ]
                //             }
                //         ],
                //         "country": "Kenya",
                //         "state": "Embakasi East",
                //         "district": "Nairobi",
                //         "line": "Mihango",
                //         "use": "home"
                //     }
                // ],
                "maritalStatus": {
                    "coding": [
                        {
                            "system": "https://ts.kenya-hie.health/Codesystem/marital-status",
                            "code": "single",
                            "display": "Single"
                        }
                    ]
                }
            }
        }
}