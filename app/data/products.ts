export interface Product {
    id: string;
    name: string;
    tagline: string;
    category: 'Medication' | 'Monitoring' | 'HealthHub' | 'Environment' | 'Therapy';
    description: string;
    features: string[];
    specs: { label: string; value: string }[];
    image: string;
    href: string;
    color: string;
    isNew?: boolean;
}

export const products: Product[] = [
    {
        id: 'med-pro',
        name: 'Pauhex Pro-Dispense',
        tagline: 'AI-Enforced Smart Dispensing System',
        category: 'Medication',
        description: 'Utilizes AI-driven physical locking mechanisms to ensure medication safety. Features a 32-channel modular design where manual loading is verified and enforced by AI to prevent incorrect or missed doses.',
        features: [
            '32 Independent Execution Channels',
            'AI-Driven Physical Locking',
            'Fail-Safe Auto-Lock Mechanism',
            'Real-time Voice & App Alerts'
        ],
        specs: [
            { label: 'Storage Capacity', value: '32 Variable Channels' },
            { label: 'Safety Mechanism', value: 'Electromagnetic Physical Lock' },
            { label: 'Accuracy', value: '99.9% Enforcement' },
            { label: 'Reliability', value: 'Medical-Grade by Design' }
        ],
        image: '/images/pro-dispense-new-1.png',
        href: '/products/med-pro',
        color: '#003568',
        isNew: true
    },
    {
        id: 'vital-radar',
        name: 'Vital Radar V2',
        tagline: 'Contactless Vital Sign Sensor',
        category: 'Monitoring',
        description: 'Ultra-compact bedside 60GHz mmWave health guardian.',
        features: [
            '60GHz Millimeter-Wave Radar',
            'High-Precision Fall Detection',
            'Contactless Sleep Analysis',
            'AI-Driven Behavioral Alerts'
        ],
        specs: [
            { label: 'Sensor Type', value: '60GHz mmWave' },
            { label: 'Range', value: 'Non-contact, up to 5m' },
            { label: 'Mount', value: 'Bedside / Wall' },
            { label: 'Privacy', value: 'Zero-camera design' }
        ],
        image: '/images/vital-radar-refined.png',
        href: '/products/vital-radar',
        color: '#003568',
        isNew: true
    },
    {
        id: 'health-hub',
        name: 'Pauhex Health Hub',
        tagline: 'Distributed AI Health Hub',
        category: 'HealthHub',
        description: 'Acts as the computing "brain" for the home or care facility. Processes all vital sign data locally to ensure privacy while providing millisecond-level AI device linkage.',
        features: [
            'RK3588 High-Performance SoC',
            'Edge Computing (Privacy-First)',
            'Offline AES-256 Encryption',
            'Multi-Protocol Support (Matter/Thread)'
        ],
        specs: [
            { label: 'Computing Power', value: '6.0 TOPS NPU' },
            { label: 'Network', value: 'Wi-Fi 6E / 5G' },
            { label: 'Privacy', value: 'Hardware-Level TEE' },
            { label: 'Power', value: '12V/2A DC' }
        ],
        image: '/images/health-hub-v2.png',
        href: '/products/health-hub',
        color: '#179A97'
    },
    {
        id: 'sync-mat',
        name: 'Pauhex Bio-Link',
        tagline: 'Rhythmic Bio-Feedback Mat',
        category: 'Monitoring',
        description: 'Uses haptic rhythmic feedback and infrared heat therapy to guide breathing synchronization and autonomic nerve regulation, improving sleep quality for seniors.',
        features: [
            'Bio-Rhythmic Haptic Matrix',
            '0.1Hz Low-Frequency Resonance',
            'Graphene 37°C Constant Heat',
            'Adaptive App Regulation'
        ],
        specs: [
            { label: 'Actuators', value: 'Dual Linear Motors' },
            { label: 'Material', value: 'Medical-Grade Antibacterial' },
            { label: 'Connectivity', value: 'BLE 5.3' },
            { label: 'Dimensions', value: '120cm x 60cm' }
        ],
        image: '/images/bio-link.png',
        href: '/products/sync-mat',
        color: '#2D3748'
    },
    {
        id: 'med-light',
        name: 'Med-Light',
        tagline: 'Premium clinical-grade vision assistance.',
        category: 'Monitoring',
        description: 'Precision ergonomic lighting designed for medical clarity and vision support.',
        features: [
            'Ergonomic clinical design',
            'Adjustable color temperature',
            'Flicker-free medical LED',
            'Shadow-reduction optics'
        ],
        specs: [
            { label: 'Light Output', value: 'Standard/Clinical modes' },
            { label: 'Color Temp', value: '3000K - 5500K' },
            { label: 'Power', value: 'Smart energy efficiency' },
            { label: 'Build', value: 'Medical-grade polymer' }
        ],
        image: '/images/med-light.png',
        href: '/products/med-light',
        color: '#2D3748'
    },
    {
        id: 'vision',
        name: 'Pauhex Vision',
        tagline: 'Privacy-First AI Bathroom Safety',
        category: 'Monitoring',
        description: 'Advanced edge-AI monitoring system specifically designed for bathroom safety. Detects falls and distress without transmitting or storing visual data.',
        features: [
            'Privacy-Preserving Edge AI',
            'Instant Fall Detection',
            'No-Camera Visual Tech',
            'Waterproof Medical Design'
        ],
        specs: [
            { label: 'Detection Tech', value: 'Thermal / Infrared Matrix' },
            { label: 'Privacy', value: 'Zero-Image Transmission' },
            { label: 'Response', value: '< 200ms Edge Trigger' },
            { label: 'Installation', value: 'Ceiling / Wall Mount' }
        ],
        image: '/images/vision.png',
        href: '/products/vision',
        color: '#179A97'
    }
];
