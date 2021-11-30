import React from "react";

const Article = () => {
  return (
    <section>
      <div className="mb-large">
        <h1 className="mb-tiny">My Current Setup (August 2021)</h1>
        <p className="mb-medium txt-fade">
          <a href="/articles/category/assorted">Assorted</a>/ 24 August 2021 / 5
          minute read
        </p>
        <p className="txt-large">A quick look at what I'm currently using.</p>
        <div className="wysiwyg mt-small">
          <p>
            I've never done one of these "current setup" posts before. It's not
            that I'm against them, I've just always worried it would become
            outdated much too quickly. That being said, I see no reason I can't
            create one per year, even if it's just for me to look back and see
            how things have changed.
          </p>
          <p>
            This post was inspired by{" "}
            <a href="https://freek.dev/uses">Freek Van Der Herten</a> and{" "}
            <a href="https://adamwathan.me/uses/">Adam Wathan</a>.
          </p>
          <hr />
          <h2>Software &amp; Tools</h2>
          <h3>VS Code</h3>
          <p>
            Most of the time I'm writing PHP (for either WordPress or Laravel
            projects) as well as JavaScript. To help me with that I find{" "}
            <a href="https://code.visualstudio.com/">VS Code</a> to be the best
            all around tool.
          </p>
          <p>
            I've given{" "}
            <a href="https://www.jetbrains.com/phpstorm/">PhpStorm</a> a go in
            the past but it's a real powerhouse and a bit more involved than
            what I'm currently looking for. Who knows, maybe one day...
          </p>
          <img
            src="https://res.cloudinary.com/sebkay/image/upload/c_scale,q_100,w_622/v1629833581/Screenshot_2021-08-24_at_20.32.44_l1pqyy.png"
            srcSet="https://res.cloudinary.com/sebkay/image/upload/c_scale,q_100,w_622/v1629833581/Screenshot_2021-08-24_at_20.32.44_l1pqyy.png 1x, https://res.cloudinary.com/sebkay/image/upload/c_scale,q_100,w_1244/v1629833581/Screenshot_2021-08-24_at_20.32.44_l1pqyy.png 2x"
            alt="VS Code using Ayu Mirage Bordered theme showing PHP"
          />
          <h4>Coding Theme</h4>
          <p>
            I've tried light themes, like the one that was{" "}
            <a href="https://twitter.com/adamtomat/status/1428622151930847236">
              recommended by Adam Tomat
            </a>{" "}
            on Twitter, but I find myself going back to the dark. Something
            about the colors just go better with my eyes.
          </p>
          <p>
            I'm currently using{" "}
            <a href="https://marketplace.visualstudio.com/items?itemName=teabyii.ayu">
              Ayu (Mirage Bordered)
            </a>{" "}
            as my theme in VS Code.
          </p>
          <h4>Coding Font</h4>
          <p>
            My preferred font at the moment, and has been for a while, is{" "}
            <a href="https://www.jetbrains.com/lp/mono/">JetBrains Mono</a>{" "}
            (which is, almost ironically, by the team behind{" "}
            <a href="https://www.jetbrains.com/phpstorm/">PhpStorm</a>).
          </p>
          <h3>Terminal</h3>
          <p>
            I use the terminal quite a bit, mainly for running{" "}
            <a href="https://getcomposer.org/">Composer</a> or{" "}
            <a href="https://yarnpkg.com/">Yarn</a> /{" "}
            <a href="https://www.npmjs.com/">NPM</a> tasks.
          </p>
          <p>
            Most of the time I use VS Code's built-in terminal, but for running
            global commands I tend to open a MacOS terminal window.
          </p>
          <img
            src="https://res.cloudinary.com/sebkay/image/upload/c_scale,q_100,w_622/v1629833944/Screenshot_2021-08-24_at_20.38.48_yw5pne.png"
            srcSet="https://res.cloudinary.com/sebkay/image/upload/c_scale,q_100,w_622/v1629833944/Screenshot_2021-08-24_at_20.38.48_yw5pne.png 1x, https://res.cloudinary.com/sebkay/image/upload/c_scale,q_100,w_1244/v1629833944/Screenshot_2021-08-24_at_20.38.48_yw5pne.png 2x"
            alt="Screenshot of a terminal window running Composer"
          />
          <h3>Yarn</h3>
          <p>
            I use Yarn instead of NPM as I've always found it to be faster. I
            also use <a href="https://classic.yarnpkg.com/lang/en/">Yarn v1</a>{" "}
            as I don't need the complexity of v2 in my relatively simple
            projects.
          </p>
          <h3>Webpack</h3>
          <p>
            <a href="https://webpack.js.org/">Webpack</a> is module bundler.
            What does that mean? It compiles all my JavaScript (as well as my
            CSS, SVGs and images) into a ready to go format for the web.
          </p>
          <p>
            Using Webpack gives me the benefit of using newer JavaScript in
            browsers that don't support it. This is achieved via{" "}
            <a href="https://babeljs.io/">Babel</a>.
          </p>
          <h3>Mamp</h3>
          <p>
            <a href="https://www.mamp.info/en/windows/">Mamp</a> is a local
            development server. It allows me to build websites using either
            WordPress or Laravel on my computer before I push it live to the
            internet.
          </p>
          <p>
            I specifically use{" "}
            <a href="https://www.mamp.info/en/mamp-pro/mac/">Mamp Pro</a> which
            is a paid version of Mamp. I would highly recommend paying for the
            pro version as it offers some great features you don't get with many
            other tools.
          </p>
          <img
            src="https://res.cloudinary.com/sebkay/image/upload/c_scale,q_100,w_622/v1629833778/Screenshot_2021-08-24_at_20.36.03_glrqbl.png"
            srcSet="https://res.cloudinary.com/sebkay/image/upload/c_scale,q_100,w_622/v1629833778/Screenshot_2021-08-24_at_20.36.03_glrqbl.png  1x, https://res.cloudinary.com/sebkay/image/upload/c_scale,q_100,w_1244/v1629833778/Screenshot_2021-08-24_at_20.36.03_glrqbl.png 2x"
            alt="Screenshot of Mamp Pro"
          />
          <h3>MailHog</h3>
          <p>
            <a href="https://github.com/mailhog/MailHog">MailHog</a> is
            something I use on my computer to "capture" all outgoing emails and
            show them in the GUI,
          </p>
          <p>
            This prevents any test emails going to actual email addresses. We've
            all sent out emails from a local environment at some point when we
            probably shouldn't have. MailHog prevents that from happening.
          </p>
          <h3>Local</h3>
          <p>
            <a href="https://localwp.com/">Local</a> is another local
            development server, however it differs from Mamp as it's more of a
            fully fledged environment specifically built for WordPress
            development.
          </p>
          <h3>WordPress</h3>
          <p>
            I'm pretty sure everyone and their dog knows what{" "}
            <a href="https://wordpress.org/">WordPress</a> is. It's a CMS
            (Content Management System) for editing content. It started out as a
            blogging platform, and still is at it's core, but over the years
            it's become a fully capable CMS.
          </p>
          <h3>Flywheel</h3>
          <p>
            <a href="https://getflywheel.com/">Flywheel</a> is genuinely the
            best WordPress hosting company I've ever used. From a streamlined
            interface to amazing support (and everything in between) I highly
            recommend them.
          </p>
          <h3>Laravel</h3>
          <p>
            <a href="https://laravel.com/">Laravel</a> is my PHP framework of
            choice for building custom web apps. This very website is built
            using Laravel (and hosted on Laravel Forge).
          </p>
          <p>
            (In my humble opinion) It's the best PHP framework that currently
            exists. If you've not used it before, or you're a WordPress
            developer like myself, go give it a try. It's truly amazing.
          </p>
          <h3>Laravel Forge</h3>
          <p>
            This is one of new favourite tools.{" "}
            <a href="https://forge.laravel.com/">Laravel Forge</a> makes it
            incredibly easy to manage your Laravel apps that are hosted on
            various cloud providers (in my case{" "}
            <a href="https://www.digitalocean.com/">DigitalOcean</a>).
          </p>
          <h2>Hardware</h2>
          <p>
            I'm an Apple user and am heavily ingrained in the ecosystem. I'm in
            too far to get out at this point, so I'm probably never going to
            try.
          </p>
          <ul>
            <li>
              <strong>Computer</strong>: MacBook Pro
            </li>
            <li>
              <strong>Phone</strong>: iPhone
            </li>
            <li>
              <strong>Tablet</strong>: iPad Mini
            </li>
            <li>
              <strong>Watch</strong>: Apple Watch (Series 1)
            </li>
          </ul>
          <p>
            I'd love to get my hands on a Series 6 Apple Watch at some point.
            I've had my Series 1 since late 2015 and it's definitely showing
            it's age day-to-day.
          </p>
          <h2>Until Next Time</h2>
          <p>
            Overall I use a fair amount of tools and there are a few reasons for
            that:
          </p>
          <ul>
            <li>
              I work on both Laravel and WordPress codebases and each one has a
              very different environment.
            </li>
            <li>
              The modern web requires people like me, full stack developers, to
              be "jack of all trades" so using many different tools means I can
              more easily know when is the right <em>and</em> wrong time to use
              one.
            </li>
          </ul>
          <p>
            This could very well be the first and last "current setup" article I
            ever write, so let's just enjoy it for what it is. Until next time!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Article;
