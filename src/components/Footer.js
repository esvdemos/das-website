import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/logo_white.png'
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    outer: {
        borderTop: "1px solid rgba(255,255,255,0.12)",
    },
    container: {
        color: "white",
        padding: "64px 24px 40px",
        maxWidth: "1080px",
        margin: "0 auto",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "48px",
        "@media (min-width: 700px)": {
            gridTemplateColumns: "1.6fr 1fr 1fr",
            gap: "40px",
        },
    },
    brand: {
        display: "flex",
        flexDirection: "column",
        gap: "16px",
    },
    logo: {
        width: "120px",
        display: "block",
    },
    tagline: {
        fontSize: "13px",
        lineHeight: "1.7",
        color: "rgba(255,255,255,0.55)",
        maxWidth: "220px",
        margin: 0,
        letterSpacing: "0.01em",
    },
    copyright: {
        fontSize: "12px",
        color: "rgba(255,255,255,0.35)",
        margin: "0",
        marginTop: "auto",
        paddingTop: "8px",
        letterSpacing: "0.03em",
    },
    column: {
        display: "flex",
        flexDirection: "column",
        gap: "8px",
    },
    columnTitle: {
        fontSize: "10px",
        fontWeight: "700",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.4)",
        margin: "0 0 12px 0",
        paddingBottom: "10px",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
    },
    navLink: {
        color: "rgba(255,255,255,0.75)",
        textDecoration: "none",
        fontSize: "14px",
        letterSpacing: "0.01em",
        transition: "color 0.2s ease",
        display: "block",
        paddingBottom: "2px",
        "&:hover": {
            color: "white",
        },
    },
    contactItem: {
        display: "flex",
        flexDirection: "column",
        gap: "2px",
    },
    contactLabel: {
        fontSize: "10px",
        color: "rgba(255,255,255,0.35)",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        margin: 0,
    },
    contactLink: {
        color: "rgba(255,255,255,0.75)",
        textDecoration: "none",
        fontSize: "14px",
        transition: "color 0.2s ease",
        "&:hover": {
            color: "white",
        },
    },
    divider: {
        borderColor: "rgba(255,255,255,0.08)",
        margin: "40px 0 0 0",
        border: "none",
        borderTop: "1px solid rgba(255,255,255,0.08)",
    },
    bottomBar: {
        maxWidth: "1080px",
        margin: "0 auto",
        padding: "16px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "8px",
    },
    bottomText: {
        fontSize: "11px",
        color: "rgba(255,255,255,0.25)",
        margin: 0,
        letterSpacing: "0.04em",
    },
    socialRow: {
        display: "flex",
        gap: "16px",
        marginTop: "4px",
    },
    socialLink: {
        color: "rgba(255,255,255,0.75)",
        textDecoration: "none",
        fontSize: "13px",
        letterSpacing: "0.02em",
        transition: "color 0.2s ease",
        "&:hover": {
            color: "white",
        },
    },
})

const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Goals", to: "/goals" },
    { label: "Viewpoints", to: "/viewpoints" },
    { label: "Updates", to: "/updates" },
    { label: "Publications", to: "/publications" },
    { label: "Student Teams", to: "/student-teams" },
    { label: "Vote", to: "/vote" },
]

export default function Footer() {
    const classes = useStyles()

    return (
        <div className="darkblue-background">
            <div className={classes.outer}>
                <div className={classes.container}>
                    <div className={classes.grid}>

                        {/* Brand */}
                        <div className={classes.brand}>
                            <Link to="/">
                                <img src={logo} alt="DAS Eindhoven" className={classes.logo} />
                            </Link>
                            <p className={classes.tagline}>
                                De Ambitieuze Student — representing ambitious students at TU Eindhoven.
                            </p>
                            <p className={classes.copyright}>
                                © {new Date().getFullYear()} DAS Eindhoven
                            </p>
                        </div>

                        {/* Quick Nav */}
                        <div className={classes.column}>
                            <p className={classes.columnTitle}>Navigation</p>
                            {navLinks.map(({ label, to }) => (
                                <Link key={to} to={to} className={classes.navLink}>
                                    {label}
                                </Link>
                            ))}
                        </div>

                        {/* Contact */}
                        <div className={classes.column}>
                            <p className={classes.columnTitle}>Contact</p>

                            <div className={classes.contactItem}>
                                <span className={classes.contactLabel}>Email</span>
                                <a href="mailto:DAS@tue.nl" className={classes.contactLink}>DAS@tue.nl</a>
                            </div>

                            <div className={classes.contactItem} style={{ marginTop: "12px" }}>
                                <span className={classes.contactLabel}>Phone</span>
                                <a href="tel:+31657031957" className={classes.contactLink}>+31 6 57 03 19 57</a>
                            </div>

                            <div style={{ marginTop: "16px" }}>
                                <span className={classes.contactLabel}>Social</span>
                                <div className={classes.socialRow}>
                                    <a
                                        href="https://www.instagram.com/daseindhoven/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={classes.socialLink}
                                    >
                                        Instagram
                                    </a>
                                    <a
                                        href="https://www.facebook.com/DASEindhoven"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={classes.socialLink}
                                    >
                                        Facebook
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <hr className={classes.divider} />
                <div className={classes.bottomBar}>
                    <p className={classes.bottomText}>De Ambitieuze Student · Eindhoven</p>
                    <p className={classes.bottomText}>TU Eindhoven</p>
                </div>
            </div>
        </div>
    )
}
