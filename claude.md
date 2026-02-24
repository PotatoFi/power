# Introduction

Power Calculator helps users convert and understand the conversion between any vendor's concept of "transmit power" to any other vendor's transmit power.

This includes infrastructure vendors such as Cisco, Aruba, Juniper, and Fortinet, and planning vendors such as Hamina.

# Operation

The tool should work similarly to Google Translate, except instead of translating sentences between languages, it translates an input transmit power for a chosen vendor, and outputs the transmit power for another chosen vendor.

The tool should have a left side, and a right side. On the left side, there is a drowndown menu for the input vendor. Below that, a text field where the user can input power in dBm.

On the right side, another drop-down menu for the output vendor. Below that, a static text field showing the output power in dBm.

On both sides, below the text fields, there should be an expression for how the vendor calculates TxPower. Also, a field with the Confidence Level.

# How it works

There should be a JavaScript object that defines everything for each vendor that the user can edit. For each vendor, we need to record:

* Vendor name
* UI Input type (Conducted, EIRP)
* Vendor EIRP math (for example, "Conducted + Antenna Gain + MIMO Gain (10log(Ntx))")
* Vendor UI setting for 1x1
* Vendor UI setting for 2x2
* Vendor UI setting for 3x3
* Vendor UI setting for 4x4
* Confidence (text field)

Here's the data for Cisco:

Vendor

UI Input Type

Vendor EIRP Math

Vendor UI Setting for 2x2 (10 dBm Conducted)

Vendor UI Setting for 4x4 (10 dBm Conducted)

Hamina UI Setting (to achieve 14 dBm EIRP)

Confidence (Sources)

Cisco

Conducted

Conducted + Antenna Gain + MIMO Gain (10log(Ntx))

Set conducted to 10 dBm (EIRP = 10 + 4 + 3 = 17 dBm)

Set conducted to 10 dBm (EIRP = 10 + 4 + 6 = 20 dBm)

Set conducted to 10 dBm (EIRP = 10 + 4 = 14 dBm; Difference: Vendor EIRP includes MIMO, so 17 dBm (2x2) or 20 dBm (4x4) exceeds Hamina’s 14 dBm)

High (Cisco Wireless Controller Configuration Guide, Meraki Documentation)
