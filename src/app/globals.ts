'use client'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const LayoutStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    max-width: 80%;
    margin: 0 auto;
    @media (max-width: 1024px) {
        max-width: 95%;
    }
    @media (max-width: 768px) {
        max-width: 95%;
        align-items: flex-start;
    }
`

export const GlobalStyle = createGlobalStyle`
  body, html, #__next {
    display: flex;
	margin: 0;
    height: auto;
    min-height: 100%;
	color: white;
    width: 100%;
	background-color: rgb(13, 13, 13);
  }
  

  html {  
		scroll-behavior: smooth; 
		overflow-y: auto;
	}

	div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		box-sizing: border-box;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	html {
  	body {

    	svg:not(.nofill) {
      	fill: currentColor;
    	}

    	svg:not(.multicolor, .nofill) {
      	fill: currentColor;

      	path {
      	  fill: inherit;
      	}
    	}
  	}
	}
`
