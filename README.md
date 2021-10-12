# Description
- Motivation was a 2021 Case Study: https://aws.amazon.com/solutions/case-studies/volkswagen-group-case-study/
- During vehicle production, Volkswagen Group brands must apply 25 different labels that contain country-specific safety, usability, and specification data—with over 2,000 variants. Any damaged, incorrect, or missing labels could pose regulatory issues. Furthermore, errors can occur during the inspection process, as employees are not always able to read the labels to confirm accuracy.

- To automate this process, Volkswagen brand Porsche developed an intelligent Sign Inspection (iSI) solution on Amazon Web Services (AWS).
- This solution is powered by the Digital Production Platform (DPP), a cloud-based industrial platform built by the Volkswagen Group and AWS to enable the development of scalable use cases across the company and transform its manufacturing and logistics processes.
- The DPP will also serve as the foundation for the Industrial Cloud—an open platform, community, and marketplace of digital solutions available to the automotive manufacturing industry.

####  Using the iSI Solution during Vehicle Production
Porsche uses iSI to automatically inspect labels on the plant floor with IoT-enabled devices and to perform manual inspections using a mobile app. In the assembly line, automated cameras photograph labels and send them to the cloud for analysis. If an issue is detected, the system notifies an in-line worker, who takes the vehicle to a quality check station for manual inspection.

During manual inspection, workers photograph individual labels using the iSI app. Using Amazon Textract—a fully managed machine learning service that automatically extracts printed text, handwriting, and other data from scanned documents—the iSI app compares text on labels to data stored in Volkswagen’s ICV Inference Service to identify anomalies. The results are translated and displayed to the worker, who can take appropriate action to fix detected errors.


## Current Pain Points:
- On premise (Texas, Germany, CA)
- Manual Process of Pictures, Translation and Verification

## Business Objectives
- Modern Application Architecture + Automation
- Security 
- Fault Tolerance
- Data Resilience
- Bottlenecks
- Lack of scalability and future work 

## System Design
![AB3 Diagram](https://user-images.githubusercontent.com/11032490/137006875-f3eddc5d-271b-4177-a8a8-2cbff5e6cfee.png)

### Cost Estimate
![CostEstimate 08/2021](https://user-images.githubusercontent.com/11032490/137008652-c2d03d77-02a4-4f17-87be-2c5dcbd40a70.png)
