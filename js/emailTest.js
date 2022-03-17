function emailTest(input) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value))
    {
        return (true);
    }
    return (false);
}

export {emailTest};
