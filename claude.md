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
* Vendor UI Power math (for example, "Conducted + Antenna Gain + MIMO Gain (10log(Ntx))")
* Vendor EIRP math (either the whole equation, or "UI Power + antenna gain")
* Vendor UI setting for 1x1
* Vendor UI setting for 2x2
* Vendor UI setting for 3x3
* Vendor UI setting for 4x4
* Confidence (text field)

# EIRP

In most cases, the vendor UI transmit power does not include EIRP. In other cases, the vendor transmit power is EIRP.

All vendors should display EIRP (in addtion to the UI Vendor Power) as a non-editable field, except for Aruba, which should do the reverse. This should be defined in const vendors.

# Multiple Radios

Most APs have multiple radios. The typical config is a 2.4 GHz radio, 5 GHz radio, and 6 GHz radio, although some access points differ.

The tool must support multiple radios per AP, each as it's own column (on each side of the calculator). The name (header) of each radio must come from the AP model database. Examples:

* 2.4 GHz, 5 GHz, 6 GHz
* 5 GHz, 6 GHz
* Radio 1, Radio 2

# AP Database

For each vendor, there must be a database of access points that pre-populate:

1. How many columns there are (based on each radio)
2. The name of each column (radio name)
3. The antenna gain

## Internal and external antennas

Radios can have three types of antenna:

1. Internal (the user cannot edit the gain)
2. Detachable (internal default is used, but the user can edit the gain)
3. External (the user must enter a gain value)

## AP Database fields

This should be a JavaScript object with:

* make
* model
* radio
  * radio Name
  * antenna Type
    * internal
    * detachable
    * external
  * gain
  * radio chains
  * max power in EIRP (leave empty for now, will utilize later)

Note: We might need to do max power in EIRP, total conducted, etc. as each vendor's datasheets suggest that they all record this differently. 🤦‍♂️

# Regulatory domain database

Some APs configure max TxPower based on the max EIRP for the channel in the regulatory domain. Thus, the tool must allow the user to select a regulatory domain (United States, Europe, United Kingdom, Australia) and a channel for each radio.

If the AP has a max power defined, it should be shown in the UI in the list as a non-editable field. This is primarily going to be used for Ruckus, who defines transmit power as:

* Start with the max TxPower on the channel, or max TxPower that the radio can do (whichever is less)
* Subtract a certain amount of dBm (e.g. -3 for half power to the radio)

This hasn't been built in the tool yet but should be coming soon.
