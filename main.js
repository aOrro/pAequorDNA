// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


//Creating the factory function for pAequors
const pAequorFactory = (specimenNum, dna) => {

  return pAequorObj = {
    specimenNum,
    dna,

    //Chooses a random base of the DNA sequence and changes it for a different one
    mutate() {
      let index = Math.floor(Math.random() * this.dna.length);
      let baseToChange = this.dna[index];
      let newBase = returnRandBase();

      while(baseToChange === newBase) {
        newBase = returnRandBase();
      }
      this.dna.splice(index, 1, newBase);
      return this.dna;
    },

    //Compares the DNA sequences of 2 different pAequors and returns the percentage of common DNA
    compareDNA(comp) {
      let dnaCount = 0;

      for(i = 0; i < this.dna.length; i++) {
        if(this.dna[i] === comp.dna[i]) {
          dnaCount++;
        }
        commonDNA = Math.round(((dnaCount * 100) / this.dna.length) * 10) / 10;
        return `Specimen #1 and specimen #2 have ${commonDNA}% of their DNA in common.`;
      }
    },

    //Creating a complimentary DNA string (the A and T base bond together as well as G and C bases)
    complementStrand() {
      let compDnaStrand = [];
      this.dna.forEach(base => {
        switch(base) {
          case 'A':
            compDnaStrand.push('T')
            break;
          case 'T':
            compDnaStrand.push('A')
            break;
          case 'C':
            compDnaStrand.push('G')
            break;
          case 'G':
            compDnaStrand.push('C')
            break;
          default:
            compDnaStrand.push(base);
        }
      });
      return compDnaStrand;
    },

    //To be able to survive the pAequor has to have at least a 60% of C and G bases
    willLikelySurvive() {
      let baseCount = 0;

      this.dna.forEach(base => {
        if(base === 'C' || base === 'G') {
          baseCount++
        } 
        });
        let survivalPercentage = (baseCount * 100) / this.dna.length;
        return survivalPercentage >= 60 ? true: false;
    },  
  };
};


// Creating an array of 30 pAquors that will survive
const pAequorToStudy = () => {
  let pAequorArray = [];
  let i = 0;
  while(pAequorArray.length < 30) {
    let pAequorSample = pAequorFactory(i, mockUpStrand());
      if(pAequorSample.willLikelySurvive() === true) {
        pAequorArray.push(pAequorSample);
      }
      i++;
   }
   return pAequorArray;
};

//console.log(pAequorToStudy());



//---------------------TESTS-------------------------//

//let pAequor1 = (pAequorFactory('111', mockUpStrand()));
//let pAequor2 = (pAequorFactory('222', mockUpStrand()));
//console.log(pAequor1);
//console.log(pAequor2);
//console.log(pAequor1.mutate())
//console.log(pAequor1.compareDNA(pAequor2));
//console.log(pAequor1.complementStrand());
//console.log(pAequor1.willLikelySurvive());
