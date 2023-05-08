function reverseSequence(sequence) {
    return sequence.split("").reverse().join("");
  }
  
  function complementSequence(sequence) {
    var complement = {
      "A": "T",
      "T": "A",
      "U": "A",
      "C": "G",
      "G": "C"
    };
    return sequence.split("").map(function(base) { return complement[base]; }).join("");
  }
  
  function reverseComplementSequence(sequence) {
    return complementSequence(reverseSequence(sequence));
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var inputSeq = document.getElementById('input-sequence');
    var outputSeq = document.getElementById('output-sequence');
  
    document.getElementById('reverse-btn').addEventListener('click', function() {
      outputSeq.value = reverseSequence(inputSeq.value);
    });
  
    document.getElementById('complement-btn').addEventListener('click', function() {
      outputSeq.value = complementSequence(inputSeq.value);
    });
  
    document.getElementById('revcomp-btn').addEventListener('click', function() {
      outputSeq.value = reverseComplementSequence(inputSeq.value);
    });
  });
   