import Role from "../models/Role";
import ProofTypes from "../models/ProofTypes";
import UnitMeasure from "../models/UnitMesuare";

export const createRoles = async () => {
  try {
    const count = await Role.estimatedDocumentCount();

    if (count > 0) return;

    const values = await Promise.all([
      new Role({ name: "user" }).save(),
      new Role({ name: "moderator" }).save(),
      new Role({ name: "admin" }).save(),
    ]);
    console.log(values);
  } catch (error) {
    console.log(error);
  }
};

export const createProofTypes = async () => {
  try {
    const count = await ProofTypes.estimatedDocumentCount();

    if (count > 0) return;

    const values = await Promise.all([
      new ProofTypes({ name: "agility" }).save(),
      new ProofTypes({ name: "speed" }).save(),
      new ProofTypes({ name: "resistance" }).save(),
      new ProofTypes({ name: "catching" }).save(),
      new ProofTypes({ name: "strength" }).save(),
      new ProofTypes({ name: "jump" }).save(),
      new ProofTypes({ name: "power" }).save(),
      new ProofTypes({ name: "other" }).save()
    ]);
    console.log(values);
  } catch (error) {
    console.log(error);
  }
};

export const createUnitMeasures = async () => {
  try {
    const count = await UnitMeasure.estimatedDocumentCount();

    if (count > 0) return;

    const values = await Promise.all([
      new UnitMeasure({ name: "seconds" }).save(),
      new UnitMeasure({ name: "meters" }).save(),
      new UnitMeasure({ name: "reps" }).save(),
      new UnitMeasure({ name: "other" }).save()
    ]);
    console.log(values);
  } catch (error) {
    console.log(error);
  }
};
