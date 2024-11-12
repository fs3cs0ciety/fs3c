document.querySelectorAll("pre code").forEach((block) => {
    if (typeof Prism !== "undefined") {
        Prism.highlightElement(block);
    } else {
        block.innerHTML = block.innerText
            .replace(/\b(int|char|return|void|static|if|else|for|while|module_init|module_exit|MODULE_LICENSE|MODULE_AUTHOR|MODULE_DESCRIPTION)\b/g, '<span class="syntax-keyword">$1</span>')
            .replace(/#\s*include\s+[<"][^>"]+[>"]/g, '<span class="syntax-directive">$&</span>')
            .replace(/\b([A-Z_]+)\b/g, '<span class="syntax-macro">$1</span>')  // Macros like KPROBE_LOOKUP
            .replace(/\/\/.*/g, '<span class="syntax-comment">$&</span>')
            .replace(/(".*?")/g, '<span class="syntax-string">$1</span>');
    }
});





// Define a basic Prism language configuration for C
Prism.languages.c = {
    'directive': {
        pattern: /#\s*include\s+[<"][^>"]+[>"]/,
        alias: 'include'
    },
    'keyword': /\b(static|int|void|return|module_init|module_exit|MODULE_LICENSE|MODULE_AUTHOR|MODULE_DESCRIPTION)\b/,
    'function': /\b(printk|__init|__exit)\b/,
    'type': /\b(kernel|module|void|int)\b/,
    'string': {
        pattern: /("|').*?\1/,
        greedy: true
    },
    'comment': /\/\/.*/,
    'number': /\b\d+\b/
};
