+++
title = "CMS Upper Plumbing"
description = "🚧🏗️🚧yippie kayak, otherbuckets!!!, but with hysteresis"
weight = 0
extra = {"link" = "https://purdueseds.space/liquids/cms/", "link_name" = "Purdue SEDS", "img" = "/assets/psp/hero.jpg", "toc" = false}
+++

![image alt ><](/assets/psp/hero.jpg)
*^ CMS Hotfire*

## PSP Liquids and CMS

[PSP Liquids (Purdue Space Program: Liquids Team)](https://purdueseds.space/liquids/) is Purdue's student liquid rocketry team. It's entirely comprised of undergrads, and its main goal is to "provide students the experience they need to build the next generation of advanced aerospace vehicles".

From 2021-2024, PSP Liquids developed a vehicle called *CraterMaker Special*, or *CMS*.

CMS was originally designed to be an ethanol-LOx vehicle, but was later downsized and converted to a methalox vehicle. I was the RE for the vehicle's Upper Plumbing (depicted below) which consisted of the following two main subsystems:
- A bang-bang vehicle press system
    - Helium COPV
    - Commodity loading points
- A vehicle vent & emergency relief system

![image alt ><](/assets/psp/cms_overview.png)

## Bang-Bang

![image alt > small](/assets/psp/integrated_pretty_pic.png)

A key factor in choosing a press system for the vehicle was how its design process would prepare us for the type of work we might encounter in industry.

Even though a simple regulator would've be simpler and more reliable for our use case, pressing with a bang-bang system would afford us valuable exposure to solenoids, on-vehicle control, choked flow, and manifold design.

I led design and testing of the bang-bang press system for CMS.

### Bang-Bang Sim

To simulate the system as best I could, I wrote a [bang-bang sim](@/projects/bang-bang-sim.md) in Python. Using isentropic expansion across the press valves, and a constant mass flow drain from each tank (there was a cavitating venturi at the outlet of each tank), I was able to create the framework for a pretty sweet vehicle fluids sim. 

You can read more about the Python sim [here](@/projects/bang-bang-sim.md). To speed up development and get into "hardware mode" more quickly, I pivoted to an excel sheet that does simple boundary condition calcs:

![image alt ><](/assets/psp/basic_sizing.png)

## Vent & Emergency Relief

## GSE upgrades

I just put this website up - still working on getting these projects documented!
