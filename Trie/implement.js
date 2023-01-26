// https://leetcode.com/problems/implement-trie-prefix-tree/

var  Trie = function() {
    this.flag = false;
    this.links = new Array(26).fill(false);
    this.containsKey = function(key){
        return this.links[key.charCodeAt(0)-'a'.charCodeAt(0)];
    
    }
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let ref = this;
    for(let i=0; i<word.length; i++){
        const char = word.charAt(i)
     if(!ref.containsKey(char)){
         ref.links[char.charCodeAt(0)-'a'.charCodeAt(0)] = new Trie();
        }
        ref = ref.links[char.charCodeAt(0)-'a'.charCodeAt(0)];
    }
    ref.flag = true;
};

/** 
 * @param {string} word
 * @return {boolean}
*/
Trie.prototype.search = function(word) {
    let ref = this;
    for(let i=0; i<word.length; i++){
        const char = word.charAt(i)
     if(!ref.containsKey(char)){
        return false;
        }
        ref = ref.links[char.charCodeAt(0)-'a'.charCodeAt(0)];
    }
    return ref.flag;
};

/** 
 * @param {string} prefix
 * @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
    let ref = this;
    for(let i=0; i<prefix.length; i++){
        const char = prefix.charAt(i)
     if(!ref.containsKey(char)){
        return false;
        }
        ref = ref.links[char.charCodeAt(0)-'a'.charCodeAt(0)];
    }
    return true;
};

var obj = new Trie()
obj.insert('vikas');
console.log(obj.search('vikas'))
console.log(obj.startsWith('aikas'));
console.log(Trie);
/** 
 * Your Trie object will be instantiated and called as such:
 */