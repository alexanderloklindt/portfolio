const About = ({ t } : any) => ((
        <div>
            <h1>
                <i>{t('routes.about')}</i>
            </h1>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
              {t('description.part2')}
            </a>
        </div>
    )
);

export default About;