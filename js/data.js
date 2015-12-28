import quarter1 from './data/quarter1.json';
import quarter2 from './data/quarter2.json';
import quarter3 from './data/quarter3.json';
import superbowl from './data/superbowl.json';
let mappings = {
  quarter1,
  quarter2,
  quarter3,
  superbowl
};

class Data {
  get(dataset) {
    return mappings[dataset];
  }
}

export default Data;
