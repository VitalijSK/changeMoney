// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency > 10000) {
        return {error: 'You are rich, my friend! We don\'t have so much coins for exchange'}
    } 
    if (currency <= 0) {
        return {};
    }

    const change = {};

    const H = Math.floor(currency / 50);
    if (H > 0) {
        currency -= H * 50;
        change.H = H;
    }   
    const Q = Math.floor(currency / 25);
    if (Q > 0) {
        currency -= Q * 25;
        change.Q = Q;
    }  
    const D = Math.floor(currency / 10);
    if (D > 0) {
        currency -= D * 10;
        change.D = D;
    }  
    const N = Math.floor(currency / 5);
    if (N > 0) {
        currency -= N * 5;
        change.N = N;
    } 
    if (currency > 0) {
        change.P = currency;
    } 
    return change;  
}
