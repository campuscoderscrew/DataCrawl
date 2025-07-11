/*  

All assets needed (images) should be under public/landing

Components related to this page are in Components/Landing

 */


export default function Landing() {
    return (
        <div>
            {/* Hero */}
            <main>
                <nav>
                    <span>
                        <img src="landing/Logo" />
                        DataCrawl
                    </span>
                    <div>
                        <p>Features</p>
                        <p>Pricing</p>
                        <p>Investors</p>
                        <p>Contact</p>
                    </div>
                    <div>
                        <button>
                            <span>
                                <img src="" />
                                Login
                            </span>
                        </button>
                        <button>
                            SignUp
                        </button>
                    </div>
                </nav>

                <div>
                    <h1>Industrial Web Data Extraction</h1>
                    <p>
                        Lorem ipsum sit amet dolor, lorem ipsum sit amet dolor, lorem ipsum sit amet dolor lorem ipsum.
                    </p>
                    <button>Get Started</button>
                </div>
            </main>

            {/* Use Header Components for of the following sections */}

            {/* Features: Feature Card Component */}

            {/* Usage */}

            {/* Demo */}

            {/* Pricing: Pricing Card Component  */}

            {/* Register */}

            {/* Footer */}
        </div>
    )
}