import React from 'react'
import Link from 'next/link'

export default function NavBar() {
    return (
        <>
            <nav id="mobile-menu">
                <ul>
                    <li><Link legacyBehavior href="/"><a>Home</a></Link>
                    </li>
                    <li><Link legacyBehavior href="/#features"><a>About us</a></Link></li>
                    <li><Link legacyBehavior href="/#roadmap"><a>Roadmap</a></Link></li>
                    <li><Link legacyBehavior href="/draw"><a>Draw</a></Link></li>
                    <li><Link legacyBehavior href="/"><a>Links</a></Link>
                        <ul className="submenu">
                            <li><Link legacyBehavior href="/blog"><a>Telegram</a></Link></li>
                            <li><Link legacyBehavior href="/gridsidebarblog"><a>Twitter</a></Link></li>
                            <li><Link legacyBehavior href="/blogclassic"><a>Dextools</a></Link> </li>
                            <li><Link legacyBehavior href="/singleblog"><a>Etherscan</a></Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>

        </>
    )
}
