// models/membershipModel.ts
import db from "../../../../config/database"; // Make sure to import the database config

const MembershipModel = {
  getAllMemberships: async () => {
    const sql = `SELECT * FROM membership`;

    try {
      // Fetch all memberships
      const [memberships]: any = await db.execute(sql);
      return memberships;
    } catch (error) {
      console.error("Error fetching memberships:", error);
      throw error;
    }
  },
};

export default MembershipModel;
