export const siteContent = {
  name: "Alex D. Clark",
  headline: "Cloud Solutions Architect",
  summary:
    "Designing resilient, secure, and automated Azure platforms that help teams ship faster with confidence.",
  cta: "Schedule a consultation",
  location: "Remote | EST",
  email: "alex@example.com",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/example" },
    { label: "GitHub", href: "https://github.com/example" },
    { label: "Twitter", href: "https://twitter.com/example" }
  ],
  skills: [
    "Azure Architecture",
    "Azure Virtual Desktop (AVD)",
    "Automation & PowerShell",
    "Infrastructure as Code (Bicep/Terraform)",
    "Kubernetes & AKS",
    "Security & Zero Trust",
    "Monitoring & Operations"
  ],
  projects: [
    {
      title: "AKS Landing Zone Accelerator",
      description:
        "Blueprinted a multi-region AKS platform with workload identity, Azure CNI, GitOps, and cost guardrails for a regulated fintech portfolio.",
      tags: ["AKS", "GitOps", "Azure CNI", "Cost Management"],
      links: {
        demo: "https://example.com/aks-landing-zone",
        github: "https://github.com/example/aks-landing-zone"
      }
    },
    {
      title: "AVD Workforce Modernization",
      description:
        "Delivered zero-trust virtual desktops with FSLogix, profile hardening, and autoscale policies that cut compute spend by 32%.",
      tags: ["AVD", "Automation", "Security"],
      links: {
        demo: "https://example.com/avd-modernization",
        github: "https://github.com/example/avd-modernization"
      }
    },
    {
      title: "IaC Platform Factory",
      description:
        "Created a reusable Terraform/Bicep module library with policy-as-code, compliance tagging, and golden image pipelines for platform teams.",
      tags: ["IaC", "Terraform", "Bicep", "Pipelines"],
      links: {
        demo: "https://example.com/iac-factory",
        github: "https://github.com/example/iac-factory"
      }
    },
    {
      title: "Observability Uplift",
      description:
        "Standardized Azure Monitor, Log Analytics, and Prometheus/Grafana for hybrid workloads with SLO dashboards and alert hygiene.",
      tags: ["Monitoring", "Grafana", "Azure Monitor"],
      links: {
        demo: "https://example.com/observability",
        github: "https://github.com/example/observability"
      }
    }
  ],
  experience: [
    {
      role: "Principal Cloud Solutions Architect",
      company: "Northwind Digital",
      period: "2022 — Present",
      summary:
        "Guiding enterprise migrations to cloud-native architectures with an emphasis on automation, resiliency, and observability.",
      highlights: [
        "Led AKS and AVD reference architectures adopted by 15+ product teams",
        "Drove platform cost optimizations yielding ~$450k annual savings",
        "Coached engineers on IaC and DevSecOps practices across the org"
      ]
    },
    {
      role: "Senior Azure Consultant",
      company: "Fabrikam Advisory",
      period: "2018 — 2022",
      summary:
        "Delivered modern workspace and platform engagements for regulated industries with strong security and compliance needs.",
      highlights: [
        "Implemented conditional access and identity hardening for 20k users",
        "Built automation runbooks that eliminated 200+ hours/month of toil",
        "Established disaster recovery playbooks and regular game-days"
      ]
    }
  ],
  certifications: [
    "Microsoft Certified: Azure Solutions Architect Expert",
    "Microsoft Certified: Cybersecurity Architect Expert",
    "HashiCorp Certified: Terraform Associate",
    "Kubernetes Certified Administrator (CKA)"
  ]
};
