import React from "react";
import UserBiosSection from "components/UserBiosSection";
import { useQuery, gql } from "@apollo/client";
import { useAuth } from "util/auth";

const QUERY = gql`
  query Users($organizationId: Int!) {
    users(organizationId: $organizationId) {
      firstName
      lastName
      id
    }
  }
`;

function AdminUsers(props) {
  const auth = useAuth();
  const organizationId = 1;
  const { data, loading, error } = useQuery(QUERY, {
    variables: { organizationId },
  });

  if (loading) {
    return <h2>loading</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }
  const users = data.users;

  return (
    <UserBiosSection
      bg="white"
      textColor="dark"
      size="md"
      bgImage=""
      bgImageOpacity={1}
      title="Meet the Team"
      subtitle=""
      users={users}
    />
  );
}

export default AdminUsers;
