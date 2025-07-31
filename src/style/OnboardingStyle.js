import { css } from '../assets/lit-core-2.7.4.min.js';

export const OnboardingStyle =  css`
        * {
            font-family:
                'Inter',
                -apple-system,
                BlinkMacSystemFont,
                'Segoe UI',
                Roboto,
                sans-serif;
            cursor: default;
            user-select: none;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :host {
            display: block;
            height: 100%;
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            overflow: hidden;
        }

        .onboarding-container {
            position: relative;
            width: 100%;
            height: 100%;
            background: #0a0a0a;
            overflow: hidden;
        }

        .gradient-canvas {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
        }

        .content-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 60px;
            z-index: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 32px 48px;
            max-width: 500px;
            color: #e5e5e5;
            overflow: hidden;
        }

        .slide-icon {
            width: 48px;
            height: 48px;
            margin-bottom: 16px;
            opacity: 0.9;
            display: block;
        }

        .slide-title {
            font-size: 28px;
            font-weight: 600;
            margin-bottom: 12px;
            color: #ffffff;
            line-height: 1.3;
        }

        .slide-content {
            font-size: 16px;
            line-height: 1.5;
            margin-bottom: 24px;
            color: #b8b8b8;
            font-weight: 400;
        }

        .context-textarea {
            width: 100%;
            height: 100px;
            padding: 16px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.05);
            color: #e5e5e5;
            font-size: 14px;
            font-family: inherit;
            resize: vertical;
            transition: all 0.2s ease;
            margin-bottom: 24px;
        }

        .context-textarea::placeholder {
            color: rgba(255, 255, 255, 0.4);
            font-size: 14px;
        }

        .context-textarea:focus {
            outline: none;
            border-color: rgba(255, 255, 255, 0.2);
            background: rgba(255, 255, 255, 0.08);
        }

        .feature-list {
            max-width: 100%;
        }

        .feature-item {
            display: flex;
            align-items: center;
            margin-bottom: 12px;
            font-size: 15px;
            color: #b8b8b8;
        }

        .feature-icon {
            font-size: 16px;
            margin-right: 12px;
            opacity: 0.8;
        }

        .navigation {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 16px 24px;
            background: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(10px);
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            height: 60px;
            box-sizing: border-box;
        }

        .nav-button {
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: #e5e5e5;
            padding: 8px 16px;
            border-radius: 6px;
            font-size: 13px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 36px;
            min-height: 36px;
        }

        .nav-button:hover {
            background: rgba(255, 255, 255, 0.12);
            border-color: rgba(255, 255, 255, 0.2);
        }

        .nav-button:active {
            transform: scale(0.98);
        }

        .nav-button:disabled {
            opacity: 0.4;
            cursor: not-allowed;
        }

        .nav-button:disabled:hover {
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(255, 255, 255, 0.1);
            transform: none;
        }

        .progress-dots {
            display: flex;
            gap: 12px;
            align-items: center;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.2);
            transition: all 0.2s ease;
            cursor: pointer;
        }

        .dot:hover {
            background: rgba(255, 255, 255, 0.4);
        }

        .dot.active {
            background: rgba(255, 255, 255, 0.8);
            transform: scale(1.2);
        }
`;

export default OnboardingStyle;

