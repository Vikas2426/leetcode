// https://takeuforward.org/pattern/pattern-1-rectangular-star-pattern/

const pat1 = (rows = 5) => {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows; j++) {
            process.stdout.write("* ");
        }
        console.log();
    }
};


// https://takeuforward.org/pattern/pattern-2-right-angled-triangle-pattern/
const pat2 = (rows = 5) => {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j <= i; j++) {
            process.stdout.write("* ");
        }
        console.log();
    }
};


// https://takeuforward.org/pattern/pattern-3-right-angled-number-pyramid/

const pat3 = (rows = 5) => {
    for (let i = 0; i < rows; i++) {
        let x = 1;
        for (let j = 0; j <= i; j++) {
            process.stdout.write(x + " ");
            x++;
        }
        console.log();
    }
};


// https://takeuforward.org/pattern/pattern-4-right-angled-number-pyramid-ii/

const pat4 = (rows = 5) => {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j <= i; j++) {
            process.stdout.write(i + 1 + " ");
        }
        console.log();
    }
};


// https://takeuforward.org/pattern/pattern-5-inverted-right-pyramid/

const pat5 = (rows = 5) => {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows - i; j++) {
            process.stdout.write("* ");
        }
        console.log();
    }
};

// https://takeuforward.org/pattern/pattern-6-inverted-numbered-right-pyramid/


const pat6 = (rows = 5) => {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows - i; j++) {
            process.stdout.write(j + 1 + " ");
        }
        console.log();
    }
};


// https://takeuforward.org/pattern/pattern-7-star-pyramid/

const pat7 = (rows = 5) => {
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= rows - i; j++) {
            process.stdout.write(" ");
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            process.stdout.write("*");
        }
        console.log("");
    }
};

// https://takeuforward.org/pattern/pattern-8-inverted-star-pyramid/

const pat8 = (rows = 5) => {
    for (let i = 0; i <= rows; i++) {
        for (let j = 0; j < i; j++) {
            process.stdout.write(" ");
        }
        for (let j = 1; j <= (2 * (rows - i)) - 1; j++) {
            process.stdout.write("*");
        }
        console.log("");
    }
};

// https://takeuforward.org/pattern/pattern-9-diamond-star-pattern/
const pat9 = (n = 5) => {
    pat7(n);
    pat8(n);
}

//https://takeuforward.org/pattern/pattern-10-half-diamond-star-pattern/
const pat10 = (n = 5) => {
    for (let i = 1; i <= 2 * n - 1; i++) {
        let stars = i;
        if (i >= n) stars = 2 * n - i;
        for (let j = 1; j <= stars; j++) {
            process.stdout.write("*");
        }
        console.log()
    }
};


// https://takeuforward.org/pattern/pattern-11-binary-number-triangle-pattern/
const pat11 = (n = 5) => {
    for (let i = 1; i <= n; i++) {
        let x = i % 2 === 0 ? 0 : 1;
        for (let j = 1; j <= i; j++) {
            process.stdout.write(x + '');
            x = x === 0 ? 1 : 0;
            console.log();
        }
    }
}

// https://takeuforward.org/pattern/pattern-12-number-crown-pattern/
const pat12 = (n = 5) => {
    for (let i = 1; i < n; i++) {
        // number
        for (let j = 1; j <= i; j++) {
            process.stdout.write(j + ' ');
        }

        // spaces
        for (let j = 1; j < 2 * (n - i); j++) {
            process.stdout.write('  ');
        }

        // number
        for (let j = i; j >= 1; j--) {
            process.stdout.write(j + ' ');
        }
        console.log()
    }
};

// https://takeuforward.org/pattern/pattern-13-increasing-number-triangle-pattern/
const pat13 = (n = 5) => {
    let x = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(x++ + ' ');
        }
        console.log()
    }
};

const ASCII_A = 65;

// https://takeuforward.org/pattern/pattern-14-increasing-letter-triangle-pattern/

const pat14 = (n = 5) => {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            process.stdout.write(String.fromCharCode(ASCII_A + j) + '');
        }
        console.log()
    }
};


// https://takeuforward.org/pattern/pattern-15-reverse-letter-triangle-pattern/

const pat15 = (n = 5) => {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            process.stdout.write(String.fromCharCode(ASCII_A + j) + '');
        }
        console.log()
    }
};


// https://takeuforward.org/pattern/pattern-16-alpha-ramp-pattern/

const pat16 = (n = 5) => {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            process.stdout.write(String.fromCharCode(ASCII_A + i) + '');
        }
        console.log()
    }
};


// https://takeuforward.org/pattern/pattern-17-alpha-hill-pattern/

const pat17 = (n = 5) => {
    for (let i = 0; i < n; i++) {
        let char = String.fromCharCode(ASCII_A);
        //spaces
        for (let j = 0; j <= n - i; j++) {
            process.stdout.write(" ");
        }
        // characters
        for (let j = 0; j <= i; j++) {
            char = String.fromCharCode(ASCII_A + j);
            process.stdout.write(char + '');
        }

        // characters
        for (let j = 1; j <= i; j++) {
            let x = String.fromCharCode(char.charCodeAt(0) - j);
            process.stdout.write(x + '');
        }
        console.log();
    }
};


// https://takeuforward.org/pattern/pattern-18-alpha-triangle-pattern/
const pat18 = (n = 5) => {
    for (let i = 1; i <= n; i++) {
        let char = String.fromCharCode(ASCII_A + n - i);
        for (let j = 0; j < i; j++) {
            let x = String.fromCharCode(char.charCodeAt(0) + j);
            process.stdout.write(x + " ");
        }
        console.log();
    }
};

pat18();