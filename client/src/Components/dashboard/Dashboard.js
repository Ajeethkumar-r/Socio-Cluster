import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import ExperienceList from './ExperienceList';
import EducationsList from './EducationsList';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { DashLinks } from './DashLinks';
import { Link } from 'react-router-dom';
import { deleteAccount } from '../../actions/profile';

const Dashboard = ({
  deleteAccount,
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <Fragment>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Welcome {user && user.name}
      </p>
      {profile && loading !== null ? (
        <Fragment>
          <Spinner />
        </Fragment> ? (
          <Fragment>
            <DashLinks />
            <ExperienceList experience={profile.experience} />
            <EducationsList education={profile.education} />{' '}
            <button
              onClick={() => deleteAccount()}
              className='btn btn-danger my-2'
            >
              <i className='fas fa-user-minus'></i> Delete My Account
            </button>
          </Fragment>
        ) : (
          <Fragment>
            {/* <p>You have not create a profile Yet, please share your info</p>
            <Link to='/create-profile' className='btn btn-primary my-1'>
              Create Profile
            </Link> */}
            <Spinner />
          </Fragment>
        )
      ) : (
        <Fragment>
          {' '}
          <p>You have not created a profile Yet, please share your info</p>
          <Link to='/create-profile' className='btn btn-primary my-1'>
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
