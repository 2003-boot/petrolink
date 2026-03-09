import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  fr: {
    translation: {
      consult: {
  badge: "Études & conseils",
  title: "Étude de projet & expertise",
  backServices: "Retour aux services",
  altIllustration: "Illustration",
  blocks: {
    expertise: "Conseils et expertise métier",
    ingenierie: "Étude de projet et ingénierie",
  },
  items: {
    expertise: {
      1: "Audits opérationnels : évaluation de l’état des installations pour identifier les besoins de maintenance ou de remplacement.",
      2: "Optimisation de la maintenance (GMAO) : mise en place de stratégies préventives et prédictives pour réduire les NPT (Non-Productive Time).",
      3: "Conformité et QHSE : alignement des processus aux normes ISO 9001, 14001, 45001 et aux standards de l’industrie (API).",
    },
    ingenierie: {
      1: "Études de faisabilité (Pre-FEED & FEED) : analyse technique et financière avant le lancement de projets d’infrastructure ou de forage.",
      2: "Ingénierie de détail : dimensionnement des équipements, choix des matériaux et conception des schémas (P&ID).",
      3: "Gestion de projet (EPCM) : pilotage de la conception à la mise en service, avec maîtrise du budget et du calendrier.",
    },
  },
},


      tech: {
  badge: "Assistance technique",
  title: "Nos prestations",
  backServices: "Retour aux services",
  blocks: {
    portuaire: "Portuaire",
    industrie: "Industrie",
    energie: "Petrol, gaz & énergie",
  },
  altIllustration: "Illustration",
  items: {
    portuaire: {
      1: "Travaux sur engins de levage et de manutention",
      2: "Gestion de parc à engins et travaux de maintenance : mécanique, hydraulique, électrique et pneumatique (TEREX, PPM, chariots élévateurs, etc.)",
      3: "Remplacement de chaîne porte-câbles et maintenance",
      4: "Remplacement des câbles acier de grue",
      5: "Dépannage des automates industriels sur STS / RTG (ZPMC, KONECRANE, KALMAR)",
      6: "Remplacement d'accouplements",
      7: "Réglage et maintenance des freins de parking",
      8: "Entretien et dépannage des moteurs réducteurs, moteurs diesels",
    },
    industrie: {
      1: "MAINTENANCES",
      2: "ORGANISATION; SUIVI ET REALISATION DE PROJETS",
      3: "COORDINATION ET REALISATION DE TRAVAUX…",
    },
    energie: {
      1: "Préparation, préfabrication, fabrication de structures",
      2: "Soudure pipe",
      3: "Soudure navale et sous-marine",
      4: "Crew change « taxi rade »",
      5: "Sécurité maritime",
      6: "Assistance maritime",
      7: "Assemblage, réalisation mécanique",
      8: "Études et gestion de projet",
      9: "Installation et mise en service",
      10: "Tests et contrôle d’intégrité",
      11: "Maintenance",
      12: "Opération d’arrêt",
    },
  },
},

      // =======================
// FR
// =======================
approAchat: {
  badge: "Approvisionnement & achat",
  title: "Nos prestations",
  backServices: "Retour aux services",

  sections: {
    strategy: {
      title: "1. Stratégie d’Achat et Sourcing",
      intro:
        "PÉTROLINK SERVICE ne se contente pas d'acheter ; l'entreprise optimise la chaîne de valeur pour garantir la continuité des opérations pétrolières.",
      items: [
        "Sourcing International : Identification et qualification de fournisseurs mondiaux (équipementiers, fabricants de vannes, pompes, équipements de forage).",
        "Négociation Contractuelle : Mise en place de contrats cadres pour stabiliser les coûts malgré la volatilité des marchés des matières premières.",
        "Veille Technologique : Sélection de produits innovants répondant aux normes de sécurité les plus strictes (API, ISO).",
      ],
    },

    procurement: {
      title: "2. Gestion de l’Approvisionnement (Procurement)",
      intro:
        "Cette activité assure que le bon matériel arrive au bon moment sur les sites d'exploitation.",
      items: [
        "Gestion des Commandes : Suivi rigoureux du cycle de vie des commandes, de l'expression du besoin à la réception finale.",
        "Contrôle Qualité (Expediting) : Audits réguliers chez les fournisseurs pour s'assurer que les délais de fabrication et les spécifications techniques sont respectés.",
        "Optimisation des Stocks : Utilisation de logiciels de gestion pour minimiser les stocks dormants tout en évitant les ruptures critiques.",
      ],
    },

    logistics: {
      title: "3. Logistique et Transit",
      intro:
        "La force de PÉTROLINK réside dans sa capacité à naviguer dans des environnements complexes.",
      items: [
        "Chaîne Logistique Intégrée : Coordination du transport multimodal (air, mer, terre) pour le matériel lourd ou dangereux.",
        "Gestion Douanière : Expertise dans les procédures d'import/export pour accélérer le passage en douane et éviter les frais de surestaries.",
        "Livraison \"Dernier Kilomètre\" : Acheminement sécurisé du matériel jusqu'aux zones de production ou plateformes offshore.",
      ],
    },
  },

  strengths: {
    title: "Synthèse des atouts de PÉTROLINK",
    items: [
      "Chaîne de valeur optimisée",
      "Sourcing international sécurisé",
      "Contrôle qualité et conformité (API/ISO)",
      "Gestion proactive des délais et des stocks",
      "Logistique intégrée et expertise douanière",
      "Livraison sécurisée jusqu’aux sites d’exploitation",
    ],
  },
},

      contact: {
        cta: "Contactez-nous",
        open: "Contacter",
        whatsapp: "WhatsApp",
        email: "Email",
        modalTitle: "Envoyer un email",
        modalDesc: "Rédige ton message puis clique sur",
        close: "Fermer",
        cancel: "Annuler",
        send: "Envoyer",
        toastSuccess: "Email envoyé avec succès ✅",
        emailDefaultSubject: "Demande d'information",
        fields: {
          name: "Nom",
          email: "Email",
          subject: "Objet",
          message: "Message",
        },
        placeholders: {
          subject: "Demande de devis…",
          message: "Bonjour, je vous contacte pour…",
        },
      },

      whyUs: {
        badge: "Pourquoi nous choisir",
        title1: "L’excellence grâce à",
        title2: "la fiabilité et l’innovation",
        items: {
          mission: {
            title: "Mission",
            desc: "Ce que nous faisons chaque jour pour nos clients.Fournir des solutions intégrées d'achat, d'ingénierie et d'assistance technique de classe mondiale. Notre mission est de garantir la continuité, l’efficacité et la sécurité des opérations offshore, portuaires et industrielles à travers des solutions sur mesure et une logistique sans faille.",
          },
          vision: {
            title: "Vision",
            desc: "Ce que nous aspirons à devenir.Devenir le partenaire stratégique leader en Afrique pour la transformation technologique et logistique du secteur de l'énergie. Nous visons à redéfinir les standards de l'industrie en alliant innovation digitale, excellence opérationnelle et respect rigoureux des normes environnementales.",
          },
          values: {
            title: "Valeurs",
            desc: "Les principes qui nous guident.Fiabilité : précision et qualité sans compromis.Agilité : adaptation rapide aux environnements complexes.Sécurité (HSE) : l’humain au cœur, objectif zéro accident.Innovation : le digital au service de la performance."
          },
        },
      },

      appro: {
        badge: "Approvisionnement & achat",
        title: "Nos prestations",
        backServices: "Retour aux services",
        blocks: {
          portuaire: "Portuaire",
          industrie: "Industrie",
          energie: "Petrol, gaz & énergie",
        },
        altIllustration: "Illustration",
        items: {
          portuaire: {
            1: "Travaux sur engins de levage et de manutention",
            2: "Gestion de parc à engins et travaux de maintenance : mécanique, hydraulique, électrique et pneumatique (TEREX, PPM, chariots élévateurs, etc.)",
            3: "Remplacement de chaîne porte-câbles et maintenance",
            4: "Remplacement des câbles acier de grue",
            5: "Dépannage des automates industriels sur STS / RTG (ZPMC, KONECRANE, KALMAR)",
            6: "Remplacement d'accouplements",
            7: "Réglage et maintenance des freins de parking",
            8: "Entretien et dépannage des moteurs réducteurs, moteurs diesels",
          },
          industrie: {
            1: "MAINTENANCES",
            2: "ORGANISATION; SUIVI ET REALISATION DE PROJETS",
            3: "COORDINATION ET REALISATION DE TRAVAUX…",
          },
          energie: {
            1: "Préparation, préfabrication, fabrication de structures",
            2: "Soudure pipe",
            3: "Soudure navale et sous-marine",
            4: "Crew change « taxi rade »",
            5: "Sécurité maritime",
            6: "Assistance maritime",
            7: "Assemblage, réalisation mécanique",
            8: "Études et gestion de projet",
            9: "Installation et mise en service",
            10: "Tests et contrôle d’intégrité",
            11: "Maintenance",
            12: "Opération d’arrêt",
          },
        },
      },

      nav: {
        home: "Accueil",
        why: "Pourquoi nous",
        services: "Services",
        partners: "Partenaires",
        socials: "Nos réseaux",
        openMenu: "Ouvrir le menu",
      },

      common: {
        language: "Langue",
        seeMore: "Voir plus",
        back: "Retour",
      },

      hero: {
        badge: "Votre partenaire logistique mondial",
        title1: "Des solutions logistiques intelligentes",
        title2: "et innovantes.",
        ctaQuote: "Demander un devis",
        ctaLearn: "En savoir plus",
        cardLeftValue: "500+",
        cardLeftLabel: "Clients entreprises",
        cardRightValue: "10 000+",
        cardRightLabel: "Expéditions réussies",
        cardRightAlt: "Aperçu expédition",
        avatarAlt1: "Client 1",
        avatarAlt2: "Client 2",
        avatarAlt3: "Client 3",
      },

      servicesSection: {
        badge: "Nos services",
        title1: "Des solutions logistiques complètes",
        title2: "pour chaque entreprise",
        desc:
          "Nous proposons des solutions complètes : achats, assistance technique et conseil, pour sécuriser vos opérations et améliorer votre performance.",
      },

      services: {
        s1: {
          title: "approvisionnement et achat",
          desc:
            "Gestion des achats et de l’approvisionnement : sourcing, commandes, suivi des livraisons et optimisation des coûts pour sécuriser vos opérations.",
        },
        s2: {
          title: "assistance technique",
          desc:
            "Support technique et opérationnel : intervention rapide, supervision, contrôle, maintenance et accompagnement terrain selon vos besoins.",
        },
        s3: {
          title: "études & conseils",
          desc:
            "Analyse, audits et recommandations : diagnostics, optimisation des processus, stratégies et accompagnement pour améliorer votre performance.",
        },
      },

      partnersSection: {
        badge: "Ils nous font confiance",
        title: "Nos partenaires",
        textTitle: "Nous savons que chaque entreprise est unique",
        textBody:
          "C’est pourquoi nous proposons des services personnalisés. Nous collaborons étroitement avec nos clients pour comprendre leurs besoins spécifiques et développer des solutions sur mesure.",
        trustAlt: "Confiance - visuel",
        trustNextAlt: "Confiance - visuel suivant",
      },

      footer: {
        about:
          "Des solutions logistiques intelligentes qui font avancer votre entreprise avec fiabilité et innovation.",
        linkedin: "LinkedIn",
        addressTitle: "Adresse",
        addressLine1: "Côte d’Ivoire — Abidjan, Cocody",
        addressLine2: "Angré Djibi, Résidence AMI",
        contactsTitle: "Contacts",
        phoneDirect: "Ligne directe : (+225) 05 84 36 08 94",
        phoneManager: "Gérant : (+225) 07 58 21 92 10",
        rights: "Tous droits réservés.",
        designedBy: "Designé par",
        builtWithCare: "Conçu et construit avec soin 🚚",
      },

      quote: {
        back: "Retour",
        badge: "Demande de devis",
        title: "Demande de devis rapide",
        desc:
          "Choisissez le service souhaité, laissez votre numéro et nous vous recontactons rapidement.",
        service: "Service",
        phone: "Téléphone",
        phonePlaceholder: "+225 ...",
        send: "Envoyer la demande",
        success: "✅ Devis envoyé avec succès",

        services: {
          approvisionnement: "Approvisionnement et achat",
          assistance: "Assistance technique",
          etudes: "Études & conseils",
        },
      },


      quoteServices: {
        sourcing: "approvisionnement et achat",
        logistique: "le transport et le stockage",
        conseil: "services & conseils",
      },
    },
  },

  en: {
    translation: {
      consult: {
  badge: "Studies & consulting",
  title: "Project studies & expertise",
  backServices: "Back to services",
  altIllustration: "Illustration",
  blocks: {
    expertise: "Business consulting & expertise",
    ingenierie: "Project studies & engineering",
  },
  items: {
    expertise: {
      1: "Operational audits: assessment of existing facilities to identify maintenance or replacement needs.",
      2: "Maintenance optimization (CMMS): guidance on preventive and predictive maintenance strategies to reduce NPT (Non-Productive Time).",
      3: "Compliance & HSE: support to align processes with ISO 9001, 14001, 45001 and industry standards (API).",
    },
    ingenierie: {
      1: "Feasibility studies (Pre-FEED & FEED): technical and financial analysis before launching infrastructure or drilling projects.",
      2: "Detailed engineering: equipment sizing, material selection, and design of piping & instrumentation diagrams (P&ID).",
      3: "Project management (EPCM): end-to-end steering from design to commissioning, ensuring budget and schedule compliance.",
    },
  },
},


      tech: {
  badge: "Technical assistance",
  title: "Our services",
  backServices: "Back to services",
  blocks: {
    portuaire: "Port operations",
    industrie: "Industry",
    energie: "Oil, gas & energy",
  },
  altIllustration: "Illustration",
  items: {
    portuaire: {
      1: "Work on lifting and handling equipment",
      2: "Fleet management and maintenance work: mechanical, hydraulic, electrical and pneumatic (TEREX, PPM, forklifts, etc.)",
      3: "Cable carrier chain replacement and maintenance",
      4: "Crane steel cable replacement",
      5: "Industrial PLC troubleshooting on STS / RTG (ZPMC, KONECRANE, KALMAR)",
      6: "Coupling replacement",
      7: "Parking brake adjustment and maintenance",
      8: "Maintenance and troubleshooting of gear motors and diesel engines",
    },
    industrie: {
      1: "MAINTENANCE",
      2: "ORGANIZATION, MONITORING AND PROJECT EXECUTION",
      3: "COORDINATION AND EXECUTION OF WORK…",
    },
    energie: {
      1: "Preparation, prefabrication, and structure manufacturing",
      2: "Pipe welding",
      3: "Marine and underwater welding",
      4: "Crew change “harbor taxi”",
      5: "Maritime safety",
      6: "Maritime assistance",
      7: "Mechanical assembly and execution",
      8: "Project studies and management",
      9: "Installation and commissioning",
      10: "Integrity testing and inspection",
      11: "Maintenance",
      12: "Shutdown operations",
    },
  },
},

      // =======================
// EN
// =======================
approAchat: {
  badge: "Procurement & purchasing",
  title: "Our services",
  backServices: "Back to services",

  sections: {
    strategy: {
      title: "1. Purchasing Strategy & Sourcing",
      intro:
        "PÉTROLINK SERVICE goes beyond purchasing; we optimize the value chain to ensure continuity of oil & gas operations.",
      items: [
        "International sourcing: identification and qualification of global suppliers (OEMs, valve manufacturers, pumps, drilling equipment).",
        "Contract negotiation: framework agreements to stabilize costs despite raw material market volatility.",
        "Technology watch: selection of innovative products compliant with the strictest safety standards (API, ISO).",
      ],
    },

    procurement: {
      title: "2. Procurement Management",
      intro:
        "This activity ensures the right equipment arrives at the right time on operational sites.",
      items: [
        "Order management: strict lifecycle tracking from request to final delivery and receipt.",
        "Quality control (expediting): regular supplier audits to ensure manufacturing lead times and technical specifications are met.",
        "Inventory optimization: use of management tools to reduce dead stock while preventing critical shortages.",
      ],
    },

    logistics: {
      title: "3. Logistics & Customs Transit",
      intro:
        "PÉTROLINK’s strength lies in operating efficiently in complex environments.",
      items: [
        "Integrated logistics chain: multimodal transport coordination (air, sea, road) for heavy or hazardous cargo.",
        "Customs management: import/export expertise to speed up clearance and avoid demurrage costs.",
        "Last-mile delivery: secure delivery up to production areas or offshore platforms.",
      ],
    },
  },

  strengths: {
    title: "Key strengths of PÉTROLINK",
    items: [
      "Optimized value chain",
      "Secure international sourcing",
      "Quality control & compliance (API/ISO)",
      "Proactive lead time & inventory management",
      "Integrated logistics & customs expertise",
      "Secure delivery to operational sites",
    ],
  },
},

      contact: {
        cta: "Contact us",
        open: "Contact",
        whatsapp: "WhatsApp",
        email: "Email",
        modalTitle: "Send an email",
        modalDesc: "Write your message then click",
        close: "Close",
        cancel: "Cancel",
        send: "Send",
        toastSuccess: "Email sent successfully ✅",
        emailDefaultSubject: "Information request",
        fields: {
          name: "Name",
          email: "Email",
          subject: "Subject",
          message: "Message",
        },
        placeholders: {
          subject: "Quote request…",
          message: "Hi, I'm reaching out about…",
        },
      },

      whyUs: {
        badge: "Why choose us",
        title1: "Excellence through",
        title2: "reliability and innovation",
        items: {
          mission: {
            title: "Mission",
            desc: "What we do every day for our clients.Deliver world-class integrated procurement, engineering, and technical support solutions. Our mission is to ensure the continuity, efficiency, and safety of offshore, port, and industrial operations through tailored solutions and seamless logistics.If you want it more marketing-oriented, corporate, or simpler, tell me the context and I’ll tweak the tone.",
          },
          vision: {
            title: "Vision",
            desc: "What we aspire to become.To become the leading strategic partner in Africa for the technological and logistical transformation of the energy sector. We aim to redefine industry standards by combining digital innovation, operational excellence, and rigorous adherence to environmental standards.Si tu veux une version plus ambitieuse, plus institutionnelle, ou orientée vision/impact, je peux l’ajuster.",
          },
          values: {
            title: "Values",
            desc: "The principles that guide us.Reliability: precision and uncompromising quality.Agility: rapid adaptation to complex environments.Safety (HSE): people first, zero-accident mindset.Innovation: digital solutions driving performance.",
          },
        },
      },

      appro: {
        badge: "Procurement & purchasing",
        title: "Our services",
        backServices: "Back to services",
        blocks: {
          portuaire: "Port operations",
          industrie: "Industry",
          energie: "Oil, gas & energy",
        },
        altIllustration: "Illustration",
        items: {
          portuaire: {
            1: "Work on lifting and handling equipment",
            2: "Fleet management and maintenance work: mechanical, hydraulic, electrical and pneumatic (TEREX, PPM, forklifts, etc.)",
            3: "Cable carrier chain replacement and maintenance",
            4: "Crane steel cable replacement",
            5: "Industrial PLC troubleshooting on STS / RTG (ZPMC, KONECRANE, KALMAR)",
            6: "Coupling replacement",
            7: "Parking brake adjustment and maintenance",
            8: "Maintenance and troubleshooting of gear motors and diesel engines",
          },
          industrie: {
            1: "MAINTENANCE",
            2: "ORGANIZATION, MONITORING AND PROJECT EXECUTION",
            3: "COORDINATION AND EXECUTION OF WORK…",
          },
          energie: {
            1: "Preparation, prefabrication, and structure manufacturing",
            2: "Pipe welding",
            3: "Marine and underwater welding",
            4: "Crew change “harbor taxi”",
            5: "Maritime safety",
            6: "Maritime assistance",
            7: "Mechanical assembly and execution",
            8: "Project studies and management",
            9: "Installation and commissioning",
            10: "Integrity testing and inspection",
            11: "Maintenance",
            12: "Shutdown operations",
          },
        },
      },

      nav: {
        home: "Home",
        why: "Why us",
        services: "Services",
        partners: "Partners",
        socials: "Socials",
        openMenu: "Open menu",
      },

      common: {
        language: "Language",
        seeMore: "See more",
        back: "Back",
      },

      hero: {
        badge: "Your global logistics partner",
        title1: "Smart logistics solutions",
        title2: "and innovation.",
        ctaQuote: "Request a quote",
        ctaLearn: "Learn more",
        cardLeftValue: "500+",
        cardLeftLabel: "Business clients",
        cardRightValue: "10,000+",
        cardRightLabel: "Successful shipments",
        cardRightAlt: "Shipment preview",
        avatarAlt1: "Client 1",
        avatarAlt2: "Client 2",
        avatarAlt3: "Client 3",
      },

      servicesSection: {
        badge: "Our services",
        title1: "Complete logistics solutions",
        title2: "for every business",
        desc:
          "We provide end-to-end solutions: procurement, technical assistance and consulting, to secure your operations and improve performance.",
      },

      services: {
        s1: {
          title: "procurement & purchasing",
          desc:
            "Purchasing and sourcing management: suppliers, orders, delivery tracking and cost optimization to secure your operations.",
        },
        s2: {
          title: "technical assistance",
          desc:
            "Technical & operational support: rapid intervention, supervision, control, maintenance and on-site assistance based on your needs.",
        },
        s3: {
          title: "studies & consulting",
          desc:
            "Analysis, audits & recommendations: diagnostics, process optimization, strategies and guidance to improve your performance.",
        },
      },

      partnersSection: {
        badge: "They trust us",
        title: "Our partners",
        textTitle: "We know every business is unique",
        textBody:
          "That’s why we offer tailored services. We work closely with our clients to understand their specific needs and deliver custom solutions.",
        trustAlt: "Trust visual",
        trustNextAlt: "Next trust visual",
      },

      footer: {
        about:
          "Smart logistics solutions that move your business forward with reliability and innovation.",
        linkedin: "LinkedIn",
        addressTitle: "Address",
        addressLine1: "Côte d’Ivoire — Abidjan, Cocody",
        addressLine2: "Angré Djibi, AMI Residence",
        contactsTitle: "Contacts",
        phoneDirect: "Direct line: (+225) 05 84 36 08 94",
        phoneManager: "Manager: (+225) 07 58 21 92 10",
        rights: "All rights reserved.",
        designedBy: "Designed by",
        builtWithCare: "Built with care 🚚",
      },

      quote: {
        back: "Back",
        badge: "Quote request",
        title: "Quick quote request",
        desc:
          "Select the service you need, enter your phone number and we will contact you shortly.",
        service: "Service",
        phone: "Phone",
        phonePlaceholder: "+225 ...",
        send: "Send request",
        success: "✅ Quote sent successfully",

        services: {
          approvisionnement: "Procurement & purchasing",
          assistance: "Technical assistance",
          etudes: "Studies & consulting",
        },
      },


      quoteServices: {
        sourcing: "procurement & purchasing",
        logistique: "transport & storage",
        conseil: "services & consulting",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lang") || "fr",
  fallbackLng: "fr",
  returnNull: false,
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("lang", lng);
});

export default i18n;
