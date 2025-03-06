import { fetchAllServiceDescriptions } from "../../../server/our-services/our_services";

const Services = '/Services.png'

const ourServices = await getOurServices();
export const serviceTileData = {
    title: 'Our Services',
    desc: ourServices[0].description,
    button_text: 'Explore Our Services'
};

async function getOurServices() {
  return fetchAllServiceDescriptions();
}


export

const servicesPic = [
  {
    position: "Acquisition Services",
    image: Services,
    href:''
  },
];