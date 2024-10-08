import styles from "./Footer.module.css";

const Footer = () => (
    <footer className={styles.footerGeneral}>
        <div className={styles.footerCredits}>
            <svg width="60" height="60" viewBox="-3 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M126 37.5V50C119.382 50 114 55.6063 114 62.5V112.5C114 126.288 103.236 137.5 90 137.5H36V62.5V56.25H24L18 43.75L28.044 29.975L28.056 30.0063C30.144 27.6688 32.88 25.975 36 25.3125V12.5C36 12.5 60 18.75 60 37.5C60 41.75 60.054 54.6688 60.09 62.5H66C79.254 62.5 90 73.6938 90 87.5V125C96.618 125 102 119.394 102 112.5V62.5C102 48.7125 112.764 37.5 126 37.5Z" fill="#BDBDBD" />
                <path opacity="0.3" d="M102 62.5V112.5C102 119.375 96.6 125 90 125V137.5C90.114 137.5 90.36 137.5 90.6 137.437C91.56 137.375 93.426 137.063 95.946 136.688C106.32 133.938 114 124.188 114 112.5V62.5C114 55.625 119.4 50 126 50V37.5C112.74 37.5 102 48.6875 102 62.5ZM48 137.5H60C60 130.625 65.4 125 72 125V112.5C58.74 112.5 48 123.687 48 137.5Z" fill="#000000" />
            </svg>
            <p>Made by Crystal Durán - 2024</p>
        </div>
        <div className={styles.footerSocials}>
            <a href="https://www.linkedin.com/in/crystal-dur%C3%A1n-n%C3%BA%C3%B1ez-2b14a5279/" target="_blank" rel="noopener noreferrer">
                <svg fill="#EAF0F6" width="20"
                    height="20" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>linkedin</title> <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path> </g></svg>
            </a>
            <a href="https://github.com/crystalduran" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 20 20" width="20"
                    height="20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#EAF0F6"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>
            </a>
        </div>
    </footer>
);

export default Footer;