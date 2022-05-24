import fs from 'fs';
import toFont from 'gulp-fonter-fix';
import ttf2woff2 from 'gulp-ttf2woff2';

export const otfToTtf = () => app.gulp.src(`${app.path.src.fonts}*.otf`, {})
    .pipe(app.plugins.plumber(app.plugins.notify.onError({
        title: 'FONTS',
        message: 'Error: <%= error.message %>',
    })))
    .pipe(toFont({
        formats: ['ttf'],
    }))
    .pipe(app.gulp.dest(`${app.path.src.fonts}`));

export const ttfToWoff = () => app.gulp.src(`${app.path.src.fonts}*.ttf`, {})
    .pipe(app.plugins.plumber(app.plugins.notify.onError({
        title: 'FONTS',
        message: 'Error: <%= error.message %>',
    })))
    .pipe(toFont({
        formats: ['woff'],
    }))
    .pipe(app.gulp.dest(`${app.path.build.fonts}`))
    .pipe(app.gulp.src(`${app.path.src.fonts}*.ttf`))
    .pipe(ttf2woff2())
    .pipe(app.gulp.dest(`${app.path.build.fonts}`))
    .pipe(app.gulp.src(`${app.path.src.fonts}*.{woff,woff2}`))
    .pipe(app.gulp.dest(`${app.path.build.fonts}`));

export const fontsStyle = done => {
    const fontsStyles = `${app.path.srcFolder}/scss/fonts/fonts.scss`;

    if (app.isFontsReW && fs.existsSync(fontsStyles)) {
        fs.unlinkSync(fontsStyles);
    }

    fs.readdir(app.path.build.fonts, function(err, fontsFiles) {
        if (!fontsFiles) {
            fs.existsSync(fontsStyles) && fs.unlinkSync(fontsStyles);
            return;
        }

        if (fs.existsSync(fontsStyles)) {
            console.log('File scss/fonts/fonts.scss already exist. Use gulp fonts --rewrite for remove');
            return;
        }

        addFontsStyles(fontsStyles, fontsFiles);
    });

    done();
};

function addFontsStyles(styles, fonts) {
    fs.writeFileSync(styles, '');

    let newFileOnly;

    for (let i = 0; i < fonts.length; i++) {
        const fontFileName = fonts[i].split('.')[0];

        if (newFileOnly !== fontFileName) {
            i !== 0 && fs.appendFileSync(styles, '\n');

            const fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
            const fontDesc = fontFileName.split('-')[1] ? fontFileName.split('-')[1].toLowerCase() : fontFileName;

            let fontWeight = 400;
            let fontStyle = 'normal';

            switch (fontDesc) {
                case 'thin': {
                    fontWeight = 100;
                    break;
                }
                case 'extralight': {
                    fontWeight = 200;
                    break;
                }
                case 'light': {
                    fontWeight = 300;
                    break;
                }
                case 'medium': {
                    fontWeight = 500;
                    break;
                }
                case 'semibold': {
                    fontWeight = 600;
                    break;
                }
                case 'bold': {
                    fontWeight = 700;
                    break;
                }
                // eslint-disable-next-line no-constant-binary-expression
                case 'extrabold' || 'heavy': {
                    fontWeight = 800;
                    break;
                }
                case 'black': {
                    fontWeight = 900;
                    break;
                }
                case 'thinitalic': {
                    fontWeight = 100;
                    fontStyle = 'italic';
                    break;
                }
                case 'lightitalic': {
                    fontWeight = 300;
                    fontStyle = 'italic';
                    break;
                }
                case 'italic': {
                    fontStyle = 'italic';
                    break;
                }
                case 'bolditalic': {
                    fontWeight = 700;
                    fontStyle = 'italic';
                    break;
                }
                case 'blackitalic': {
                    fontWeight = 900;
                    fontStyle = 'italic';
                    break;
                }
            }

            fs.appendFileSync(styles, `@font-face {
    font-family: ${fontName};
    font-style: ${fontStyle};
    font-weight: ${fontWeight};
    font-display: swap;
    src: url('../fonts/${fontFileName}.woff2') format('woff2'), url('../fonts/${fontFileName}.woff') format('woff');
}\n`);

            newFileOnly = fontFileName;
        }
    }
}
