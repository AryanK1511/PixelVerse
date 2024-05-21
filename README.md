# PixelVerse

A platform that allows users to crowdsource the generation of custom datasets needed for creating Machine Learning models.

## The need for Pixelverse

Sourcing data is the cornerstone of effective machine learning models. According to a report by Forbes, 80% of AI projects never make it out of the lab due to data issues (Mar, 2019). Another study by MIT Technology Review Insights found that 72% of companies experienced data quality issues that impacted their AI and machine learning projects (MIT Technology Review Insights, 2021).

Currently, acquiring high-quality data poses significant challenges. One way to obtain data is by creating your own dataset, which involves manually creating images—a time-consuming and labor-intensive process. Alternatively, you can source data from popular platforms providers. However, even these platforms often fall short when it comes to highly specific data needs.

## What this Project does

PixelVerse addresses this gap that we just talked about in the sections above by providing a platform where users can request highly specific datasets, which we call "projects." 

Users can now receive data contributions from the public tailored to their exact requirements. For a user, it's as simple as requesting a dataset, putting in some sample images for the contributors to follow. The public, in turn, can contribute images to these projects and earn token points.

Users are incentives🤑 to contribute because they earn our tokens which they can either use to redeem gift cards or make new projects for them to source images.

Essentially, our product addresses the issue of sourcing quality images, which results in subpar models. We understand the critical importance of high-quality data and have developed a sustainable solution that offers the public access to this powerful tool and open source support.

BAD Actors: Whenever a photo is uploaded we run it through a couple of checks in our pipeline. This is were gemini comes in, we use it in conjunction with the sample images uploaded so we can sure that the photo is relevant