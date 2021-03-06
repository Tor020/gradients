import React from 'react';
import CopyButton from '../CopyButton';

const GradientDisplay = ({ backgroundColor, isFixed, gradient, navColor, randomizeBackgroundColor, setBackgroundColor }) => (
    <div class={`gradient-display ${isFixed ? 'fixed' : ''}`} style={{ background: gradient }}>
        <h1 class="input-header" style={{ color: navColor }}>Edit Color</h1>
        <div class="input-wrapper">
            <input spellCheck="false" autoComplete="false" class={`color-input ${navColor === 'rgb(255, 255, 255)' ? 'light' : 'dark'}`} style={{ color: navColor }} type="text" value={backgroundColor} onChange={(event) => setBackgroundColor(event.target.value)} />
            <button class="randomize-color" style={{ color: navColor }} onClick={randomizeBackgroundColor}>
                <i class="fas fa-random"></i>
            </button>
            <CopyButton copyText={`https://gradients.jacob-foster.com/?${encodeURIComponent(backgroundColor.replace(/\s/g, '').replace(/#/g, ''))}`}
                tooltipText="Link Copied!"
                btnClass="share-button"
                btnColor={navColor}>
                <i class="fas fa-link"></i>
            </CopyButton>
        </div>
    </div>
);

export default GradientDisplay;