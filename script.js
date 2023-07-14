document.getElementById('userForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  var weightGoal = document.getElementById('weightGoal').value;
  var subscriptionPlans = getSubscriptionPlans(weightGoal);
  displaySubscriptionPlans(subscriptionPlans);

  scrollToSubscriptionPlans();
});

function getSubscriptionPlans(weightGoal) {
  if (weightGoal === 'lose') {
    return [
      {
        name: 'Basic Plan',
        price: '$9.99/month',
        features: ['Access to basic workout plans', 'Email support']
      },
      {
        name: 'Pro Plan',
        price: '$19.99/month',
        features: ['Access to advanced workout plans', 'Email and phone support', 'Personalized training program']
      },
      {
        name: 'Premium Plan',
        price: '$29.99/month',
        features: ['Access to all workout plans', 'Email, phone, and chat support', 'Personalized training program', 'Nutrition guidance']
      }
    ];
  } else if (weightGoal === 'maintain') {
    return [
      {
        name: 'Maintenance Plan',
        price: '$14.99/month',
        features: ['Access to maintenance workout plans', 'Email support']
      },
      {
        name: 'Pro Maintenance Plan',
        price: '$24.99/month',
        features: ['Access to advanced maintenance workout plans', 'Email and phone support', 'Personalized maintenance training program']
      },
      {
        name: 'Premium Maintenance Plan',
        price: '$34.99/month',
        features: ['Access to all maintenance workout plans', 'Email, phone, and chat support', 'Personalized maintenance training program', 'Nutrition guidance']
      }
    ];
  } else if (weightGoal === 'gain') {
    return [
      {
        name: 'Weight Gain Plan',
        price: '$19.99/month',
        features: ['Access to weight gain workout plans', 'Email support']
      },
      {
        name: 'Pro Weight Gain Plan',
        price: '$29.99/month',
        features: ['Access to advanced weight gain workout plans', 'Email and phone support', 'Personalized weight gain training program']
      },
      {
        name: 'Premium Weight Gain Plan',
        price: '$39.99/month',
        features: ['Access to all weight gain workout plans', 'Email, phone, and chat support', 'Personalized weight gain training program', 'Nutrition guidance']
      }
    ];
  } else {
    return [];
  }
}

function displaySubscriptionPlans(subscriptionPlans) {
  var plansContainer = document.querySelector('#subscriptionPlans .plans-container');
  plansContainer.innerHTML = '';

  if (subscriptionPlans.length > 0) {
    subscriptionPlans.forEach(function(plan) {
      var planElement = document.createElement('div');
      planElement.classList.add('plan');

      var titleElement = document.createElement('h3');
      titleElement.textContent = plan.name;

      var priceElement = document.createElement('p');
      priceElement.classList.add('price');
      priceElement.textContent = plan.price;

      var featuresList = document.createElement('ul');
      plan.features.forEach(function(feature) {
        var featureItem = document.createElement('li');
        featureItem.textContent = feature;
        featuresList.appendChild(featureItem);
      });

      var subscribeButton = document.createElement('button');
      subscribeButton.classList.add('subscribe');
      subscribeButton.textContent = 'Subscribe';

      planElement.appendChild(titleElement);
      planElement.appendChild(priceElement);
      planElement.appendChild(featuresList);
      planElement.appendChild(subscribeButton);
      plansContainer.appendChild(planElement);
    });
  } else {
    var noPlansMessage = document.createElement('p');
    noPlansMessage.textContent = 'No subscription plans available.';
    plansContainer.appendChild(noPlansMessage);
  }

  document.getElementById('subscriptionPlans').classList.remove('hidden');
}

function scrollToSubscriptionPlans() {
  var subscriptionPlansSection = document.getElementById('subscriptionPlans');
  subscriptionPlansSection.scrollIntoView({ behavior: 'smooth' });
}
