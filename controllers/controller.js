import { default as axios } from "axios";

export const controller = async (req, res) => {
  try {
    const randomFact = await axios
      .get(" https://catfact.ninja/fact", {
        timeout: 5000,
      })
      .then((response) => response.data.fact)
      .catch((error) => `"Could not fetch a fact at this time."`);

    res.json({
      status: "success",
      user: {
        email: "mahmud.adegboyega@gmail.com",
        name: "Mahmud Adegboyega",
        stack: "Node.js/Express",
      },
      timestamp: new Date().toISOString(),
      fact: randomFact,
    });
  } catch (error) {
    res.status(500).json({ status: "Error", message: error.message });
  }
};

