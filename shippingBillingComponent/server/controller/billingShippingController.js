// const { BillingRate } = require('../../db/schema/billingSchema');
const countriesRate = require('../../db/sql/seed.js');

const requestPromise = require('request-promise');

const billingShippingCtrl = {
  get: function(req, res) {
    const eastCoastStates = [
      'MI',
      'IN',
      'KY',
      'TN',
      'AL',
      'OH',
      'GA',
      'FL',
      'SC',
      'NC',
      'VA',
      'WV',
      'DE',
      'MD',
      'NJ',
      'PA',
      'NY',
      'CT',
      'RI',
      'MA',
      'VT',
      'NH',
      'ME',
      'DC'
    ];

    const centralStates = [
      'WY',
      'CO',
      'NM',
      'ND',
      'SD',
      'NE',
      'KS',
      'OK',
      'TX',
      'MN',
      'IA',
      'MO',
      'AR',
      'LA',
      'WI',
      'IL',
      'MS'
    ];

    const westCostStates = [
      'CA',
      'OR',
      'WA',
      'NV',
      'ID',
      'UT',
      'AZ',
      'MT',
      'AK',
      'HI'
    ];

    if (req.query.country === 'United States of America') {
      const options = {
        url: `http://api.zippopotam.us/us/${req.query.zipcode}`,
        json: true
      };

      requestPromise(options).then(data => {
        let state = data['places'][0]['state abbreviation'];
        let usa = countriesRate.seeds[186];

        let basicRate = Number(usa.basic_rate);
        let expeditedRate = Number(usa.expedited_rate);
        let oneDayRate = Number(usa.one_day_rate);

        if (eastCoastStates.includes(state)) {
          data.basic_rate = String(basicRate) + '.00';
          data.expedited_rate = String(expeditedRate) + '.00';
          data.one_day_rate = String(oneDayRate) + '.00';
          console.log('east coast');
        } else if (centralStates.includes(state)) {
          data.basic_rate = String(basicRate + 1) + '.00';
          data.expedited_rate = String(expeditedRate + 2) + '.00';
          data.one_day_rate = String(oneDayRate + 3) + '.00';
          console.log('central');
        } else {
          data.basic_rate = String(basicRate + 2) + '.00';
          data.expedited_rate = String(expeditedRate + 3) + '.00';
          data.one_day_rate = String(oneDayRate + 4) + '.00';
          console.log('west coast ');
        }
        res.status(201).send(data);
      });
    } else {
      countriesRate.seeds.forEach(countryData => {
        if (req.query.country === countryData.country) {
          countryData.basic_rate = String(countryData.basic_rate) + '.00';
          countryData.expedited_rate =
            String(countryData.expedited_rate) + '.00';
          countryData.one_day_rate = String(countryData.one_day_rate) + '.00';
          console.log(countryData);
          res.status(201).send(countryData);
        }
      });
    }
  },
  post: function(req, res) {
    console.log('testing post');
    res.send('posted');
  }
};

module.exports = {
  billingShippingCtrl: billingShippingCtrl
};
