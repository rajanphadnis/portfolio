+++
title = "Python DAQ Parser"
description = "Yet another way to delete MATLAB from my life"
weight = 2
extra = {"link" = "https://github.com/rajanphadnis/daq_parser", "link_name" = "GitHub", "img" = "/assets/daq-parser.png", "toc" = false}
+++

## The Issue
Parsing TDMS and time-syncing files using MATLAB is somewhat inaccesible given the need for a MATLAB license. Additionally, the python package to parse TDMS files needs some additional configuration before a useable dataset is acheivable. Creating a single package that can time-sync multiple TDMS/CSV files and extract usefule data from this now-synced data would greatly simplify the process of plotting and parsing raw data from PSP's DAQs.

## Solution

I wrote a package to time-sync multiple TDMS/CSV files and extract usefule data from this now-synced data. It wraps [npTDMS](https://pypi.org/project/npTDMS/) and does some work with pandas to produce a clean, typed dictionary of data that can be easily plotted

The package is [published on PyPi](https://pypi.org/project/psp-liquids-daq-parser/) and is also the core of the backend of the [PSP Data Viewer platform I wrote](@/projects/dataviewer.md).

![image alt ><](/assets/daq-parser.png)
